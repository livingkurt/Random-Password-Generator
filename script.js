

// Generate a random item

// var item = items[Math.floor(Math.random()*items.length)];


var password_length_pref = prompt("Length of Password?")



var special_char_pref = confirm("Special Characters?")
var numbers_pref = confirm("Numbers?")
var lowercase_pref = confirm("Lowercase Letters")
var uppercase_pref = confirm("Uppercase Letters")


var special_char = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
var numbers = "0123456789"
var upper_letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var lower_letters = upper_letters.toLowerCase()



function print(characters){
    console.log(characters)
}

print(password_length_pref)
print(special_char_pref)
print(numbers_pref)
print(lowercase_pref)
print(uppercase_pref)


if (password_length_pref == null) {
    alert("You need to choose a password length to continue")
    location.reload();
}
else if ( special_char_pref === false && numbers_pref === false && lowercase_pref === false && uppercase_pref === false) {
    alert("You need to choose at least one character type")
    location.reload();
}
