
var generateBtn = document.querySelector("#generate");

const lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
const upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
const numValue = ["1","2","3","4","5","6","7","8","9","0"]
const specChar = ["!","@","#","$","%","^","&","*","(",")"]





function generatePassword() {


var charInput = parseInt(prompt("Please choose a length of charcters between 8 and 128"));
    if (charInput < 8 || charInput > 128) {
        alert("Please choose a number between 8 and 128");  
        return     
    }


var passwordArray = []
var holdingArray = []


    if (confirm("Lowercase?")) {
        holdingArray = holdingArray.concat(lowerCase)
    }
    if (confirm("Uppercase?")) {
        holdingArray = holdingArray.concat(upperCase)
    }
    if (confirm("Numbers?")) {
        holdingArray = holdingArray.concat(numValue)
    }
    if (confirm("Special Characters?")) {
        holdingArray = holdingArray.concat(specChar)
    }
    if (holdingArray.length == 0) {
        alert("retry")
    }

    for (let i = 0; i < charInput; i++) {
        var randomChar = holdingArray[Math.floor(Math.random()*holdingArray.length)];
        passwordArray.push(randomChar);
    }

    return passwordArray.join("").toString()
        
}


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;

}


generateBtn.addEventListener("click", writePassword);










//GIVEN I need a new, secure password
// WHEN I click the button to generate a password
//**TODO: write the generatePassword function

// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
//**TODO: Ask the user how many characters in password --> use a prompt which will be set to a variable ; make sure the information is correct - is a number between 8-129

// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
//**TODO: write a series of 4 confirms --> set these to be a variable to check what the user wants 
//**TODO: write 4 arrays that contain each set of requirements 
//**TODO: check the prompts to make sure they are true or false (using the above variable) -- add the selected associated arrays to a holding array 
//---ex upperConfirm --> true --> uppercase[] --> add to holding array

// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
//**TODO: check that we have at least one of the types

// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// **TODO: take our holding array and randomize these values --> adding to a secondary array/holding container 
// **TODO: take the randomized characters and select the amount that the user has chosen for their password length--> add these to a "return array (return variable)"  -> for loop that will go in and select the number of characters chosen for the password length
//**TODO: will need to select random characters from each of the character arrays and combine into one array that can then be converted to a string

// WHEN the password is generated
// THEN the password is written to the page
// **TODO: take return array and use a method to convert to a string --> have a variable for this and return string --> return string to existing password var in the html (passwordText.value = password)
