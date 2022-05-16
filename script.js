// 
//  1. define character arrays (ex. lower case, uppercase, special, password, user choices)
//  2  get user's password length 
//  3. define function to read inputs from user 
//  4. define 




var generateBtn = document.querySelector("#generate");

// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

  function generatePassword (){
    var size = prompt("please enter 8 to 12 characters")
    console.log(size)

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
