// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  
  // Can I simplify this code rather than declaring the variable below?
  var password = generatePassword(); 
  
  //Generates password given user inputs
  function generatePassword () {
    
    // Decalring these variables here resets their values each time the generatePassword function is run, which is what I want
    var passLength = 0;
    var passCharacters = [];
    var passArray = [];
    
    //Character arrays
    var specialChars = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "*", "-", "_", "+", "=", "|", ":", ";", "<", ">"];
    var numericChars = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    var lowerCaseChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var upperCaseChars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    
    
    //Asks user for password and displays error message if password length is less than 8 or greater than 128
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
    
    //Function that adds array values to the passCharacters array
    function passCharsPush(userCheck, charArray) {
      if (userCheck) {
        for (i = 0; i < charArray.length; i++) {
          passCharacters.push(charArray[i]);
        }
      }
    }
    //Checks if user wants special characters runs the passCharsPush the for specialChars
    let userSpecChar = window.confirm("Click OK to include special characters.");
    passCharsPush(userSpecChar, specialChars);
   
    
    // Checks if user wants numeric characters and runs the passCharsPush the for numericChars
    let userNumChar = window.confirm("Click OK to include numeric characters.");
    passCharsPush(userNumChar, numericChars);
        
    // Checks if user wants lower case characters and runs the passCharsPush the for lowerCaseChars
    let userLowCaseChar = window.confirm("Click OK to include lowercase characters.");
    passCharsPush(userLowCaseChar, lowerCaseChars);

    // Checks if user wants uppercase characters and runs the passCharsPush the for upperCaseChars
    let userUpCaseChar = window.confirm("Click OK to include uppercase characters.");
    passCharsPush(userUpCaseChar, upperCaseChars);
    
    //DELETE THIS BEFORE SUBMISSION
    console.log(passCharacters);

    //Randomly selects a series of character from the passCharacters array and puts them in the randomChar array 
    for (i = 0; i < passLength; i++) {
      randomChar = passCharacters[Math.floor(Math.random() * passCharacters.length)];
      passArray.push(randomChar);
    }

    //DELETE THIS BEFORE SUBMISSION
    console.log(passArray);
    
    //Converts the passArray to a string and assigns the new string to the password variable
    password = passArray.join("");
    return password
    };
  
  //Targets the text area in the HTML
  var passwordText = document.querySelector("#password");
  
  //Displays the contents of the password variable in the text area
  passwordText.value = password;
}

// Add event listener to generate button -- runs the writePassword function when the "Generate Password" button is pushed
generateBtn.addEventListener("click", writePassword);


