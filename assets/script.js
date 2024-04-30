// Assignment Code
var generateBtn = document.querySelector("#generate");


// Writes password to the #password input
function writePassword() {

  var password = generatePassword();

  //Generates password given user inputs
  function generatePassword() {

    // Decalring these variables here resets their values each time the generatePassword function is run, which is what I want
    var passLength = 0;
    var passCharacters = [];
    var passArray = [];

    //Character arrays
    const specialChars = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "*", "-", "_", "+", "=", "|", ":", ";", "<", ">"];
    const numericChars = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const lowerCaseChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    const upperCaseChars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];


    //Asks user for desired password length and displays error message if it is less than 8 or greater than 128
    function getPassLength() {
      passLength = window.prompt("How many characters would you like your password to contain? (Password must contain at least 8 characters)");
      const regex = /[0-9]/;

      if (!passLength) {
        // Returns "exit" if user hits Cancel
        return passLength = "exit";
      } else if (!regex.test(passLength)) {
        window.alert("Please enter a whole number between 8 and 128.")
        getPassLength();
      } else if (passLength < 8 || passLength > 128) {
        window.alert("Password must contain at least 8 characters but no more than 128 characters. Please try again.")
        getPassLength();
      }


      return passLength;
    }

    //Runs function above
    getPassLength();

    // Exits the code if the user hits Cancel --> see getPassLength function above
    if (passLength === "exit") {
      return password = "Oops! Please, try again.";
    }

    //Function that adds array values to the passCharacters array
    function passCharsPush(userCheck, charArray) {
      if (userCheck) {
        for (i = 0; i < charArray.length; i++) {
          passCharacters.push(charArray[i]);
        }
      }
    }

    // Checks if user wants certain characters; runs passCharsPush if confirmed
    // special character check
    let userSpecChar = window.confirm("Click OK to include special characters.");
    passCharsPush(userSpecChar, specialChars);

    // numeric characters check
    let userNumChar = window.confirm("Click OK to include numeric characters.");
    passCharsPush(userNumChar, numericChars);

    // lowercase characters check
    let userLowCaseChar = window.confirm("Click OK to include lowercase characters.");
    passCharsPush(userLowCaseChar, lowerCaseChars);

    // uppercase characters check 
    let userUpCaseChar = window.confirm("Click OK to include uppercase characters.");
    passCharsPush(userUpCaseChar, upperCaseChars);

    //Displays an alert if user chooses no characters for password
    if (userSpecChar === false && userNumChar === false && userLowCaseChar === false && userUpCaseChar === false) {
      window.alert("Your password must contain some type of character. Try again.");
    }

    //Randomly selects a series of character from the passCharacters array and puts them in the randomChar array 
    for (i = 0; i < passLength; i++) {
      randomChar = passCharacters[Math.floor(Math.random() * passCharacters.length)];
      passArray.push(randomChar);
    }

    //Converts the passArray to a string and assigns the new string to the password variable
    password = passArray.join("");
    return password
  };

  //Targets the text area in the HTML
  var passwordText = document.querySelector("#password");

  //Displays the contents of the password variable in the text area
  passwordText.value = password;
}

// Event listener -- runs the writePassword function when the "Generate Password" button is clicked
generateBtn.addEventListener("click", writePassword);