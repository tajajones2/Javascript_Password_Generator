// 
//  1. define character arrays (ex. lower case, uppercase, special, password, user choices)
//  2  get user's password length 
//  3. define function to read inputs from user 
//  4. define 


var lowercase = "abcdefghijklmnopqrstuvwx"
var number = "0123456789"
var special = "!@#$%^&*()"

var generateBtn = document.querySelector("#generate");

// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  

  passwordText.value = password;
}

  function generatePassword (){
    var size = prompt("Please enter 8 to 12 characters")
    console.log(size)
    //then do validation, if im checking 

    if(size>= 8 && size <=128) {
      var isLowercase= comfirm ("include lowercase?")
      console.log(isLowercase)

      var isUppercase= confirm ("include Uppercase?")
      console.log(isUppercase)

      var isNumber = confirm ("include Number?")
      console.log(isNumber)

      var isSpecial = confirm ("include Special?")
      console.log(isSpecial)

      if (isLowercase ===true) {

      }
      
    }
    else {
      alert('invalid entery')
    }



}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
