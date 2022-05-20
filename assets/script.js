//  1. Prompt the user for password criteria 
// a.) password length must be btween 8-128 characters 
// b.) lowercase, uppercase, numbers, special characters, 

//  2.) Validate the input
//  3.) Generate password based on criteria.

//  4.) And then Display the password on the page 



var aplha = "abcdefghijklmnopqrstuvwxyz";
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

function generatePassword() {
  var size = prompt("Please enter password length (between 8-128 charcters)");
  console.log(size);

  // validation for checking if true/false
  if (size >= 8 && size <= 128) {
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

  

    // for loop for pasword length 
    for (i = 0; i < size; i++) {
      var randomType = Math.floor(Math.random() * charType.length)
      console.log(randomType)

      if (isLowercase && finalpwd.length<size) {
        var randomLower = Math.floor(Math.random() * aplha.length-1);
        finalpwd = finalpwd + aplha[randomLower] 
        
      }
        /* conversion for uppercase*/ 
      if (isUppercase && finalpwd.length<size) {
        var randomUpper = Math.floor(Math.random() * aplha.length-1);
        finalpwd = finalpwd + aplha[randomUpper].toUpperCase();
      }

      if (isNumber && finalpwd.length<size) {
        var randomNumber = Math.floor(Math.random() * number.length -1);
        finalpwd = finalpwd + number[randomNumber] 

      }

      if (isSpecial && finalpwd.length<size) {
        var randomSpecial = Math.floor(Math.random() * special.length);
        finalpwd = finalpwd + special[randomSpecial]

      }
    }

  } else {
    // alert('invalid entry')
  
  }
  return finalpwd;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)

