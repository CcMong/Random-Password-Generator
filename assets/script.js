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

// Function with two arrays as parameters, that: 1.) pulls out a random element from the first array, and then 2.) pushes this element onto the end of the second array.

function getRandomIndexAndAddToArray(array1, array2) {

  var randomIndex = Math.floor((Math.random() * array1.length));
  
  array2.push(array1[randomIndex]);

}

// Function to incrementally add an array to relevantArraysMerged:

function incrementalArrayMerge(array) { 

  relevantArraysMerged = relevantArraysMerged.concat(array);

}

// Function for Shuffling the Password Array: 
// Better sorting methods and algorithms, such as the Fisher-Yates Algorithm, exist but I don't seek to perfectly randomise the array. I just don't want the first 1-4 "compulsory" elements added into the password array (based on user preferences) to retain their positions when displaying the final password.

function arrayShuffle(array) {

  array.sort( () => 0.5 - Math.random());

  return array;
    
} 

/*1a. Getting User's Password Length Preference
  ----------------------------------------------*/

// Function to prompt user for password options

function getPasswordOptions() {    
          
  var validNumberEntry = false; //This variable stores the validity of the user's response as a boolean
  while (validNumberEntry === false) {

    var userNumberInput = prompt(
      "How many password characters would you like?\n Enter a number between 10 and 64", "Number between 10 and 64"
    ); 

    if (userNumberInput === null) {  // Clicking 'Cancel' produces a null value
      
      location.reload(); // The page should reload if the user clicks 'Cancel' on the password length prompt
      return; // Clicking 'Cancel'should break out of the function. 

      //Also this null test comes first, otherwise "null" would satisfy the < 10 condition and so clicking 'Cancel' would trigger an error message.

    } else if (
      Number.isNaN(Number(userNumberInput)) || 
      userNumberInput < 10 ||
      userNumberInput > 64
    ) {
      // Prompt outputs are usually strings. So the first condition checks for text inputs which, when converted to number, will output NaN.

      alert("ERROR - Invalid input. You must enter a * number between 10 and 64 *"); 

    } else { // To exit the while loop
      
      validNumberEntry = true; 

      passwordOptions.length = userNumberInput;// At this point, the password length preference is stored into the passwordOptions object once we are satisfied with the validity
    } 

  }

/* 1b. Getting User's Character Preferences
--------------------------------------------*/

  var validCharacterOptions = false; // This variable stores the collective validity of the user's character preferences as a boolean

  while (validCharacterOptions === false) {

    // Now the user will be asked about character preferences. The responses will be stored in variables

    var lowercaseOption = confirm(
      "Please confirm if you would like * lowercase characters * in your password.\n OK - Yes, Cancel - No"
    );
    
    var uppercaseOption = confirm(
      "Please confirm if you would like * uppercase characters * in your password.\n OK - Yes, Cancel - No"
    );    
    
    var numericOption = confirm(
      "Please confirm if you would like * numeric characters * in your password.\n OK - Yes, Cancel - No"
    );
    
    var specialCharacterOption = confirm(
      "Please confirm if you would like * special characters * in your password.\n OK - Yes, Cancel - No"
    );

    // At this point, if the user has declined all character options, an error message should appear that prompts them to choose at least one option
    
    if (
      lowercaseOption === false &&
      uppercaseOption === false &&
      numericOption === false &&
      specialCharacterOption === false
    ) {
      alert(
        "ERROR - Invalid options. You must select * at least ONE * character type from the following:\n - Lowercase\n - Uppercase\n - Numeric\n - Special characters "
      );
    } else {  // To exit the while loop

      validCharacterOptions = true; // It is at this point that we will want to store the user's character options in our object for use in generating the password

      passwordOptions.lowercase = lowercaseOption;
      passwordOptions.uppercase = uppercaseOption;
      passwordOptions.numeric = numericOption;
      passwordOptions.special = specialCharacterOption;

      passwordArray = []; // This variable was declared globally, but will be reassigned to an empty array at this point, right after the user responses are stored in the object. This is so that every time the "Generate Password" button is clicked, it will go through the cycle without retaining elements from previous passwords and adding to them.

      relevantArraysMerged = []; // Same as with passwordArray above
    }
  }

  /* 2. Generating the Random Password
=====================================*/ 

  /* First ensure that the generated password contains at least one character of each type requested by the user. Do this by populating the passwordArray with one character of each type requested by the user. 

  Then we want to create one large array that contains all possible characters that could possibly match the user's preferences. From this large array, relevantArraysMerged, we can now randomly pick characters to populate passwordArray until the number of elements equals the user specified length. */
  
  if(passwordOptions.lowercase === true) {

    getRandomIndexAndAddToArray(lowerCasedCharacters, passwordArray);
    incrementalArrayMerge(lowerCasedCharacters);
  
  }
  
  if(passwordOptions.uppercase === true) {

    getRandomIndexAndAddToArray(upperCasedCharacters, passwordArray);    
    incrementalArrayMerge(lowerCasedCharacters);
  }
  
  if(passwordOptions.numeric === true) {

    getRandomIndexAndAddToArray(numericCharacters, passwordArray);
    incrementalArrayMerge(lowerCasedCharacters);
  }
  
  if(passwordOptions.special === true) {

    getRandomIndexAndAddToArray(specialCharacters, passwordArray);    
    incrementalArrayMerge(lowerCasedCharacters);
  }

  do { 
    getRandomIndexAndAddToArray(relevantArraysMerged, passwordArray);

  } while (passwordArray.length < passwordOptions.length);

  // This loop above will keep adding random characters to passwordArray until its length matches the user length requirement









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