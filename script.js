

// Generate a random item

// var item = items[Math.floor(Math.random()*items.length)];


// Prompting User for Information
var password_length_pref = prompt("Length of Password?\nMust Be > 8 Characters")
var special_char_pref = confirm("Special Characters?")
var numbers_pref = confirm("Numbers?")
var lowercase_pref = confirm("Lowercase Letters")
var uppercase_pref = confirm("Uppercase Letters")

// Assiging Values to Variables
var special_char = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
var numbers = "0123456789"
var upper_letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var lower_letters = upper_letters.toLowerCase()

// console.log(lower_letters)



// function print(characters){
//     console.log(characters)
// }

// print(password_length_pref)
// print(special_char_pref)
// print(numbers_pref)
// print(lowercase_pref)
// print(uppercase_pref)


if (password_length_pref == null || password_length_pref < 8) {
    alert("You need to choose a password length to continue")
    location.reload();
}
else if ( special_char_pref === false && numbers_pref === false && lowercase_pref === false && uppercase_pref === false) {
    alert("You need to choose at least one character type")
    location.reload();
}


function generate_password(a, b, c, d, e) {
    for (var i = 0; i < a; i++){
        if (b == true) {
            for (var i = 0; i < a; i++) {
                var special_char_rand = special_char[Math.floor(Math.random()*a)];
                console.log(special_char_rand)
            }
        }
        if (c == true) {
            for (var i = 0; i < a; i++) {
                var numbers_rand = numbers[Math.floor(Math.random()*a)];
                console.log(numbers_rand)
            }
        }
        if (d == true) {
            for (var i = 0; i < a; i++) {
                var upper_letters_rand = upper_letters[Math.floor(Math.random()*a)];
                console.log(upper_letters_rand)
            }
        }
        if (e == true) {
            for (var i = 0; i < a; i++) {
                var lower_letters_rand = lower_letters[Math.floor(Math.random()*a)];
                console.log(lower_letters_rand)
            }
        }
    }
    

    // console.log(a)
    // console.log(b)
    // console.log(c)
    // console.log(d)
    // console.log(e)

}

generate_password(password_length_pref,special_char_pref,numbers_pref,lowercase_pref,uppercase_pref)