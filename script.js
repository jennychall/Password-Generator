// Assignment code here
var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",

];

var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

//Array, lowercase characters// 
var lowerCase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
]; 

//Array for uppercase letters//
var upperCase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O", 
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "X",
  "Y",
  "Z",
]; 

function generatePassword(){
  var passwordLength = prompt ("What length of password would you like?"); 
  var hasSpecialChar = confirm ("Include Special Characters");
  var hasUpperChar = confirm ("Include UpperCase Characters");
  var hasLowerChar = confirm ("Include LowerCase Characters");
  var hasNumbers = confirm ("Include Numbers");
  var hasSpecialChar = confirm ("Include Special Characters");

  var passwordOptions = {
    passwordLength: passwordLength, 
    hasSpecialChar: hasSpecialChar,
    hasUpperChar: hasUpperChar,
    hasLowerChar: hasLowerChar,
    hasNumbers: hasNumbers,
  }

  var result = [];
  var requiredCharacters = [];
  var charArray = [];

  function selectRandChar(array){
      return array[Math.floor(Math.random() * array.length)]; 
  }
  //If we include option for password, must ensure option is in the password//
if(passwordOptions.hasSpecialChar){
    result.push(selectRandChar(specialCharacters));
    requiredCharacters = requiredCharacters.concat(specialCharacters);
}

if(passwordOptions.hasUpperChar){
  result.push(selectRandChar(upperCase));
  requiredCharacters = requiredCharacters.concat(upperCase);
}

if(passwordOptions.hasLowerChar){
  result.push(selectRandChar(lowerChar));
  requiredCharacters = requiredCharacters.concat(lowerChar);
}

if(passwordOptions.hasNumbers){
  result.push(selectRandChar(numbers));
  requiredCharacters = requiredCharacters.concat(numbers);
}
var currentPasswordLength = result.length; 
for(var i = 0; i < passwordOptions.passwordLength - result.length; i++) {
    var randomChar = selectRandChar(requiredCharacters);
  result.push(randomChar);
} 
console.log(result);

}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);






