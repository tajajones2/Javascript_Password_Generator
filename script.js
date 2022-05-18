//  1. Prompt the user for password criteria 
      // a.) password length must be btween 8-128 characters 
      // b.) lowercase, uppercase, numbers, special characters, 

//  2.) Validate the input
//  3.) Generate password based on criteria.

//  4.) And then Display the password on the page 
 


var lowercase = "abcdefghijklmnopqrstuvwx";
var number = "0123456789";
var special = "!@#$%^&*()";
var finalpwd = "";
var charType = [];

var generateBtn = document.querySelector("#generate");

// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  

  passwordText.value = password;
}

  function generatePassword (){
    var size = prompt("Please enter password length (between 8-128 charcters)");
    console.log(size);
  
// validation for checking if true/false
    if(size>= 8 && size <=128) {
      var isLowercase = confirm("include lowercase?");
      if (isLowercase === true) {
        charType.push("lower")
      console.log(isLowercase);
      }

      var isUppercase = confirm("include Uppercase?");
      if (isUppercase === true) {
        charType.push("upper")
      console.log(isUppercase);
      }

      var isNumber = confirm("include Number?");
      if (isNumber === true) {
        charType.push("number")
      console.log(isNumber);
      }

      var isSpecial = confirm("include Special?");
      if (isSpecial === true) {
        charType.push("special")
      console.log(isSpecial);
      }

      // if (isLowercase ===true) {
      //   var positionString=Math.floor(Math.random() *26);
      
      
        finalpwd=finalpwd + lowercase[positionString];
        // console.log(finalpwd);
        return finalpwd;

// for loop for pasword length 
       for (i = 0; i < size; i++) {
         var randomText = Math.floor(Math.random() *size
         
       }

      }
      
    }
    else {
      alert('invalid entery')
    }

    



} 

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
