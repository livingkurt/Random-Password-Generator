// Prompting User for Information
var password_length_pref = prompt("Length of Password?\nMust Be between 8 - 20 Characters")
var special_char_pref = confirm("Special Characters?")
var numbers_pref = confirm("Numbers?")
var lowercase_pref = confirm("Lowercase Letters")
var uppercase_pref = confirm("Uppercase Letters")

// Assiging Values to Variables
var special_char = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
var numbers = "0123456789"
var upper_letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var lower_letters = upper_letters.toLowerCase()


if (password_length_pref == null || password_length_pref < 8 || password_length_pref > 20) {
    alert("You need to choose a password length within the specificatinos to continue")
    location.reload();
}
else if ( special_char_pref === false && numbers_pref === false && lowercase_pref === false && uppercase_pref === false) {
    alert("You need to choose at least one character type")
    location.reload();
}


function generate_password(a, b, c, d, e) {
    var password = ""
    for (var i = 0; i < a; i++){
        if (b == true) {
            for (var i = 0; i < a; i++) {
                var special_char_rand = special_char[Math.floor(Math.random()*special_char.length)];
                password = password + special_char_rand
            }
        }
        if (c == true) {
            for (var i = 0; i < a; i++) {
                var numbers_rand = numbers[Math.floor(Math.random()*numbers.length)];
                password = password + numbers_rand
            }
        }
        if (d == true) {
            for (var i = 0; i < a; i++) {
                var upper_letters_rand = upper_letters[Math.floor(Math.random()*upper_letters.length)];
                password = password + upper_letters_rand
            }
        }
        if (e == true) {
            for (var i = 0; i < a; i++) {
                var lower_letters_rand = lower_letters[Math.floor(Math.random()*lower_letters.length)];
                password = password + lower_letters_rand
            }
        }
    }
    var password_rand_length = ""
    for (var i = 0; i < a; i++){
        var password_length = password[Math.floor(Math.random()*password.length)];
        password_rand_length = password_length + password_rand_length
    }
    console.log(password_rand_length)
    document.getElementById("password_area").innerHTML = password_rand_length;
    document.getElementsByTagName("p").innerHTML = password_rand_length;
}

function myFunction() {
    /* Get the text field */
    var copyText = document.getElementById("password_area");
  
    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /*For mobile devices*/
  
    /* Copy the text inside the text field */
    document.execCommand("copy");
  
    /* Alert the copied text */
    alert("Copied to Clipboard\n"+ copyText.value);
  }


// // Get the modal
// var modal = document.getElementById("myModal");

// // Get the button that opens the modal
// var btn = document.getElementById("copy_to_clipboard_b");

// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// // When the user clicks on the button, open the modal
// btn.onclick = function() {
//   modal.style.display = "block";
// }

// // When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//   modal.style.display = "none";
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }