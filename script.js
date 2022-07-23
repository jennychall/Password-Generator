// Assignment code here
//Array for password characters 
function generatePassword() {
  var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  var uppercaseCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var lowercaseCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var specialCharacters = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];
  var possibleCharacters = [];
}; 

//else statement for get input, amount of characters
numberOfCharacters = prompt("How many characters do you want in your password? Choose between 8-128 characters.");
  if (numberOfCharacters < 8 || numberOfCharacters > 128) {
    return "Please choose a valid number of characters.";
  } else if (isNaN(numberOfCharacters)) {
    numberOfCharacters = prompt("Please enter a valid number.");
  }
  else {
    alert("Your password will be " + numberOfCharacters + " characters long.");
    
  };

//character prompts 
  hasLowercase = confirm("Do you want to use lowercase characters?");
  if (hasLowercase) {
    var turnToLowercase = alert("Your password will contain lowercase characters.");
  }
  else {
    alert("Your password will not contain lowercase characters.");
  }; 

  hasSpecial = confirm("Do you want to use special characters?");
  if (hasSpecial) {
    alert("Your password will contain special characters.");
  }
  else {
    alert("Your password will not contain special characters.");
  };

  hasNumbers = confirm("Do you want to use numbers?");
  if (hasNumbers) {
    alert("Your password will contain numbers.");
  }
  else {
    alert("Your password will not contain numbers.");
  };

  hasUppercase = confirm("Do you want to use uppercase characters?");
  if (hasUppercase) {
    alert("Your password will contain uppercase characters.");
  }
  else {
    alert("Your password will not contain uppercase characters.");
  }; 




