// // Assignment Code
var Numbers = ['0','1','2','3','4','5','6','7','8','9']
var LowercaseLetters = ['a','b','c','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
var UppercaseLetters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
var Symbols = ['`','~','!','@','#','$','%','^','&','*','(',')','_',',','{','}','[',']',':',';','.','<','>','/','?','\','|',']
var generateBtn = document.querySelector("#generate");

var numPass = []
var LwrPass = []
var UpprPass = []
var SymPass = []
var Pass = []

// Step 1 : write functions to all for loops
// Step 2: make if statements depending on users input
// Step 3: include all elements user wants based on input

// Example: User input = 134
// Include 1, 3, and 4 for loop through functions



for (i= 0; i < Numbers.length; i ++){
  var w = Math.floor(Math.random() * Numbers.length);
  numPass.push(Numbers[w])
}

console.log (numPass)

for (i= 0; i < LowercaseLetters.length; i ++){
  var x = Math.floor(Math.random() * LowercaseLetters.length);
  LwrPass.push(LowercaseLetters[x])
}

console.log (LwrPass)

for (i= 0; i < UppercaseLetters.length; i ++){
  var y = Math.floor(Math.random() * UppercaseLetters.length);
  UpprPass.push(UppercaseLetters[y])
}

console.log (UpprPass)

for (i= 0; i < Symbols.length; i ++){
  var z = Math.floor(Math.random() * Symbols.length);
  SymPass.push(Symbols[z])
}

console.log (SymPass)

let numPassNC = numPass.join("");
let LwrPassNC = LwrPass.join("");
let UpprPassNC = UpprPass.join("");
let SymPassNC = SymPass.join("");

let allPass = [numPassNC + LwrPassNC + UpprPassNC + SymPassNC];
console.log (allPass)

function getChar() {
 char = allPass.charAt(1) 
}

for (i= 0; i < allPass.length; i ++){
  var a = Math.floor(Math.random() * allPass.length);
  getChar()
  Pass.push(char);
}
console.log (Pass)





// console.log (NumbersArray [i])

// console.log (numbers[i])
// console.log (LowercaseLettersArray)
// console.log (UppercaseLettersArray)
// console.log (SymbolsArray)

// // // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;
// }

// // // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

// var lowercasecha
 

// // var randompass = [];



// for ( i = 0; i< numbers.length; i++) { }
//   var x = Math.floor(Math.random() * 10);
//   randompass.push(x)
//   var modified = [randompass]******}