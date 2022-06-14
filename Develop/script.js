// // Assignment Code

// Defines an Array for each Type of Characters and all is the Combined Array containing all Characters
var Numbers = ['0','1','2','3','4','5','6','7','8','9']
var LowercaseLetters = ['a','b','c','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
var UppercaseLetters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
var Symbols = ['`','~','!','@','#','$','%','^','&','*','(',')','_',',','{','}','[',']',':',';','.','<','>','/','?','\','|',']
var all = Numbers.concat(LowercaseLetters.concat(UppercaseLetters.concat(Symbols)))

// Defines the Generate Button as a Variable 
var generateBtn = document.querySelector("#generate");




// // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// These are empty Arrays corresponding to each character type they will contain the same elements
//  as the original array but they will be shuffled
// Ex. if Numbers was [1,2,3] ; numPass will be empty first and will be filled with perhaps [2,3,1] after line 30
var numPass = [];
var LwrPass = [];
var UpprPass = [];
var SymPass = [];
var Pass = [];

// Step 1 : write functions to all for loops
// Step 2: make if statements depending on users input
// Step 3: include all elements user wants based on input

// Example: User input = 134
// Include 1, 3, and 4 for loop through functions

// This shuffles Array Numbers and pushes the randomized elements into the previously empty numPass; Line 36 logs Array numPass for 
// experimintation purposes. 
for (i= 0; i < Numbers.length; i ++){
  var w = Math.floor(Math.random() * Numbers.length);
  numPass.push(Numbers[w])
}

console.log (numPass)

// This does the same but with Array LowercaseLetters
for (i= 0; i < LowercaseLetters.length; i ++){
  var x = Math.floor(Math.random() * LowercaseLetters.length);
  LwrPass.push(LowercaseLetters[x])
}

console.log (LwrPass)

// This does the same but with Array UppercaseLetters
for (i= 0; i < UppercaseLetters.length; i ++){
  var y = Math.floor(Math.random() * UppercaseLetters.length);
  UpprPass.push(UppercaseLetters[y])
}

console.log (UpprPass)

// This does the same but with Array Symbols
for (i= 0; i < Symbols.length; i ++){
  var z = Math.floor(Math.random() * Symbols.length);
  SymPass.push(Symbols[z])
}

// This picks a randomizes the combined Array and joins the elements (eliminates the commas) and logs it in 
for (i= 0; i < all.length; i ++){
  var a = Math.floor(Math.random() * all.length);
  char = all[a];
  Pass.push(char);
}

PassNC = Pass.join("");
console.log (PassNC);

// // Write password to the #password input
function writePassword() {
  var password = PassNC;
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

