// Assignment Code
var generateBtn = document.querySelector("#generate");

//Global variables and arrays
var passLength = 0;
var passCharacters = [];
var specialChars = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "*", "(", ")", "-", "_", "+", "=", "{", "}", "[", "]", "|", "\\", "/", ":", ";", "<", ">", ".", ",", "?"];
var numericChars = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var lowerCaseChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCaseChars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var passArray = [];

// Write password to the #password input
function writePassword() {
  
  var password = generatePassword(); 

  //Generates password given user inputs
  function generatePassword () {
    
    //Asks user for password and displayserror message if password length is less than 8
    function getPassLength () {
      passLength = window.prompt("How many characters would you like your password to contain? (Password must contain at least 8 characters)");
      
      if (passLength < 8 || passLength > 128) {
        window.alert("Password must contain at least 8 characters but no more than 128 characters. Please try again.")
        getPassLength();
      }

      return passLength;
    }
    
    getPassLength();
    // delete this console log later
    console.log(passLength);
    
    //TODO: Write a function for the if statements?

    //Checks if user wants special characters and adds them to passCharacters array
    var userSpecChar = window.confirm("Click OK to include special characters.");
    if (userSpecChar) { 
      for (i = 0; i < specialChars.length; i++) {
        passCharacters.push(specialChars[i]);
      }
      // console.log(Array.isArray(passCharacters));
    }
    
    // Checks if user wants numeric characters and adds them to passCharacters array
    var userNumChar = window.confirm("Click OK to include numeric characters.");
    if (userNumChar) { 
      for (i = 0; i < numericChars.length; i++) {
        passCharacters.push(numericChars[i]);
      }
    }
    
    // Checks if user wants lower case characters and adds them to passCharacters array
    var userLowCaseChar = window.confirm("Click OK to include lowercase characters.");
    if (userLowCaseChar) { 
      for (i = 0; i < lowerCaseChars.length; i++) {
        passCharacters.push(lowerCaseChars[i]);
      }
    }

    // Checks if user wants uppercase characters and adds them to passCharacters array
    var userUpCaseChar = window.confirm("Click OK to include uppercase characters.");
    if (userUpCaseChar) { 
      for (i = 0; i < upperCaseChars.length; i++) {
        passCharacters.push(upperCaseChars[i]);
      }
    }
    console.log(passCharacters);

    //Start Here 
    for (i = 0; i < passLength; i++) {
      randomChar = passCharacters[Math.floor(Math.random() * passCharacters.length)];
      passArray.push(randomChar);
    }
    console.log(passArray);
    password = passArray.join("");
    return password
    };
  
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


