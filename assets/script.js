// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

/* 1. Getting User Requirements for the Password
=================================================*/

//First create an object in which we will store all the user password preferences

var passwordOptions = {
  length: 0,
  lowercase: false, //These are initial placeholder values which will change depending on user choices
  uppercase: false,
  numeric: false,
  special: false,
};

var passwordArray = []; // This is the empty array we will drop values in that will eventually form the generated password

var relevantArraysMerged = []; // This is where we will drop and mix in the elements of all the character arrays that correspond to the user's preferences. We will then be able to pick from this array to populate passwordArray

/*1a. Getting User's Password Length Preference
  ------------------------------------------------*/

// Function to prompt user for password options

function getPasswordOptions() {    
          
  var validNumberEntry = false; //This variable stores the validity of the user's response as a boolean
  while (validNumberEntry === false) {

    var userNumberInput = prompt(
      "How many password characters would you like?\n Enter a number between 10 and 64", "Number between 10 and 64"
    ); 

  }
}



// Function to prompt user for password options
function getPasswordOptions() {

}

// Function for getting a random element from an array
function getRandom(arr) {

}

// Function to generate password with user input
function generatePassword() {

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);