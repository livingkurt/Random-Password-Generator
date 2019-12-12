// Prompting User for Information
var password_length_pref = prompt("Length of Password?\nMust Be between 8 - 128 Characters")
var special_char_pref = confirm("Special Characters?")
var numbers_pref = confirm("Numbers?")
var lowercase_pref = confirm("Lowercase Letters")
var uppercase_pref = confirm("Uppercase Letters")

// Assiging Values to Variables
var special_char = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
var numbers = "0123456789"
var upper_letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var lower_letters = upper_letters.toLowerCase()

//Determines whether there is a qualifying number in the password length prompt
if (password_length_pref == null || password_length_pref < 8 || password_length_pref > 128) {
    alert("You need to choose a password length within the specificatinos to continue")
    location.reload();
}
//Determines whether the user has selected at least one type of character for there password
else if (special_char_pref === false && numbers_pref === false && lowercase_pref === false && uppercase_pref === false) {
    alert("You need to choose at least one character type")
    location.reload();
}


//Preiminary Round of Random
function generate_password(a, b, c, d, e) {
    // inialize a variable to house the initial oversized password
    var password = ""
    //Loop through all the user specified characters randomly
    for (var i = 0; i < a; i++){
        if (b == true) { //If User chose special characters
            for (var i = 0; i < a; i++) { //Loop Through the special characters list the user specified amount
                //Choose randomly from list specified
                var special_char_rand = special_char[Math.floor(Math.random()*special_char.length)];
                //Add random characters to initialized variable outside of the for loop
                password = password + special_char_rand
            }
        }
        if (c == true) { //If User chose numbers
            for (var i = 0; i < a; i++) { //Loop Through the numbers list the user specified amount
                //Choose randomly from list specified
                var numbers_rand = numbers[Math.floor(Math.random()*numbers.length)];
                //Add random characters to initialized variable outside of the for loop
                password = password + numbers_rand
            }
        }
        if (d == true) { //If User chose uppercase letters
            for (var i = 0; i < a; i++) { //Loop Through the uppercase list the user specified amount
                //Choose randomly from list specified
                var upper_letters_rand = upper_letters[Math.floor(Math.random()*upper_letters.length)];
                //Add random characters to initialized variable outside of the for loop
                password = password + upper_letters_rand
            }
        }
        if (e == true) { //If User chose lowercase letters
            for (var i = 0; i < a; i++) { //Loop Through the lower case list the user specified amount
                //Choose randomly from list specified
                var lower_letters_rand = lower_letters[Math.floor(Math.random()*lower_letters.length)];
                //Add random characters to initialized variable outside of the for loop
                password = password + lower_letters_rand
            }
        }
    }
    // inialize a variable to house the initial correct sized password
    var password_rand_length = ""
    //Loop through all the user specified characters randomly a second time
    for (var i = 0; i < a; i++){
        var password_length = password[Math.floor(Math.random()*password.length)];
        password_rand_length = password_length + password_rand_length
    }
    console.log(password_rand_length)
    //Places the password in the textarea
    document.getElementById("password_area").innerHTML = password_rand_length;
    // document.getElementsByTagName("p").innerHTML = password_rand_length;
}

function copy_to_clipboard() {
    /* Get the text field */
    var copyText = document.getElementById("password_area");
  
    /* Select the text field */
    copyText.select();
    // copyText.setSelectionRange(0, 99999); /*For mobile devices*/
  
    /* Copy the text inside the text field */
    document.execCommand("copy");
  
    /* Alert the copied text */
    alert("Copied to Clipboard\n"+ copyText.value);
  }

