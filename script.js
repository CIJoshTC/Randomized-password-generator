// Assignment Code
var capLetters=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z" ];
var lowerLetters=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",]; 
var specChars=["!", "@", "#","$", "%", "^", "&", "*", "(", ")","?"]
var numbers=["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
var chosen=[]


function generatePassword(){
  var passwordLength=prompt("choose password length between 8 and 28 chracters");
  console.log(passwordLength);
  var addLetters= confirm("Add letters to password?");
  console.log(addLetters);
  var addSpecChars= confirm("Add special characters?");
  console.log(addSpecChars);
  return "";
}

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
alert("time to generate password")
console.log("user will choose yes or no for selcted prompts")


