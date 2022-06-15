// // Assignment Code

// Defines an Array for each Type of Characters and all is the Combined Array containing all Characters
var Numbers = ['0','1','2','3','4','5','6','7','8','9']
var LowercaseLetters = ['a','b','c','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
var UppercaseLetters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
var Symbols = ['`','~','!','@','#','$','%','^','&','*','(',')','_',',','{','}','[',']',':',';','.','<','>','/','?','\','|',']


// Prompt Code
PassLength = prompt('Choose the Password Length.');
IncludeNumbers = confirm('Do you Want to Include Numbers in your Password?');
IncludeLwrcase = confirm('Do you Want to Include Lowercase Letters in your Password?');
IncludeUpprCase = confirm('Do you Want to Include Uppercase Letters in your Password?');
IncludeSymbols = confirm('Do you Want to Include Symbols in your Password?');

console.log (PassLength)
console.log (IncludeNumbers)
console.log (IncludeLwrcase)
console.log (IncludeUpprCase)
console.log (IncludeSymbols)

// NLUS
if (IncludeNumbers == true & IncludeLwrcase == true & IncludeUpprCase == true & IncludeSymbols == true) {
  var all = Numbers.concat(LowercaseLetters.concat(UppercaseLetters.concat(Symbols)))
} 
// LUS
if (IncludeNumbers == false & IncludeLwrcase == true & IncludeUpprCase == true & IncludeSymbols == true ) {
  var all = LowercaseLetters.concat(UppercaseLetters.concat(Symbols))
} 
// NUS
if (IncludeNumbers == true & IncludeLwrcase == false & IncludeUpprCase == true & IncludeSymbols == true) {
  var all = Numbers.concat(UppercaseLetters.concat(Symbols))
} 
// NLS
if (IncludeNumbers == true & IncludeLwrcase == true & IncludeUpprCase == false & IncludeSymbols == true) {
  var all = Numbers.concat(LowercaseLetters.concat(Symbols))
} 
// NLU
if (IncludeNumbers == true & IncludeLwrcase == true & IncludeUpprCase == true & IncludeSymbols == false) {
  var all = Numbers.concat(LowercaseLetters.concat(UppercaseLetters))
} 
// US
if (IncludeNumbers == false & IncludeLwrcase == false & IncludeUpprCase == true & IncludeSymbols == true) {
  var all = UppercaseLetters.concat(Symbols)
} 
// NS
if (IncludeNumbers == true & IncludeLwrcase == false & IncludeUpprCase == false & IncludeSymbols == true) {
  var all = Numbers.concat(Symbols)
} 
// NL
if (IncludeNumbers == true & IncludeLwrcase == true & IncludeUpprCase == false & IncludeSymbols == false) {
  var all = Numbers.concat(LowercaseLetters)
} 
// LS
if (IncludeNumbers == false & IncludeLwrcase == true & IncludeUpprCase == false & IncludeSymbols == true) {
  var all = LowercaseLetters.concat(Symbols)
} 
// NU
if (IncludeNumbers == true & IncludeLwrcase == false & IncludeUpprCase == true & IncludeSymbols == false) {
  var all = Numbers.concat(UppercaseLetters)
} 
// S
if (IncludeNumbers == false & IncludeLwrcase == false & IncludeUpprCase == false & IncludeSymbols == true) {
  var all = Symbols
} 
// N
if (IncludeNumbers == true & IncludeLwrcase == false & IncludeUpprCase == false & IncludeSymbols == false) {
  var all = Numbers
} 
// U
if (IncludeNumbers == false & IncludeLwrcase == false & IncludeUpprCase == true & IncludeSymbols == false) {
  var all = UppercaseLetters
} 
// L
if (IncludeNumbers == false & IncludeLwrcase == false & IncludeUpprCase == false & IncludeSymbols == true) {
  var all = LowercaseLetters
} 

console.log (all)
console.log(all.length)

// Defines the Generate Button as a Variable 
var generateBtn = document.querySelector("#generate");




// // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// // These are empty Arrays corresponding to each character type they will contain the same elements
var Pass = [];


// This picks a randomizes the combined Array and joins the elements (eliminates the commas) and logs it in 
for (i= 0; i < PassLength; i ++){
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
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);
}