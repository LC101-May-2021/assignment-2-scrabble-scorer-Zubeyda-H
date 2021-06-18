// inspired by https://exercism.io/tracks/javascript/exercises/etl/solutions/91f99a3cca9548cebe5975d7ebca6a85

const input = require("readline-sync");
const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 }
 
	  }
	}
	return letterPoints;
 }

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt() {
  //console.log("Let's play some scrabble! Enter a word:");
  let initialPrompt = input.question(`Welcome to the Scrabble score calculator!
  Which scoring algorithm would you like to use?

  0 - Scrabble: The traditional scoring algorithm.
  1 - Simple Score: Each letter is worth 1 point.
  2 - Bonus Vowels: Vowels are worth 3 pts, and consonants are 1 pt.
  Stop - To terminate the program.

  Enter 0, 1, or 2: `)

return initialPrompt;
};

let simpleSco=0;
let vowelScore=0;
let scrabbleScor=0;

function simpleScore(word) {
  simpleSco = word.length;
 return simpleSco;
}

function vowelBonusScore(word) {
  for(let i=0; i<word.length; i++){
    let alpha = word.toLowerCase;
    let letter = alpha[i];
    if(letter == 'a' || 'e' || 'i' || 'o' || 'u') {
      vowelScore += 3;
    } else {
      vowelScore += 1;
    }
  }
 return vowelScore;
}

function scrabbleScore(word, newPointStructure) {
  for(let i =0; i < word.length; i++) {
    let alphabet = word[i];
    scrabbleScor = newPointStructure.scrabbleScor;
    scrabbleScor += scrabbleScor;
  }
return scrabbleScor;
};

let scrabble = {
  name: 'Scrabble',
  description: 'The traditional scoring algorithm.',
  scoreFunction:'Uses the newPointStructure object to determine the score for a given word.'
};

let scoreSimple = {
  name: 'Simple Score',
  description: 'Each letter is worth 1 point.',
  scoreFunction: 'Uses the newPointStructure object to determine the score for a given word.'
};

let bonusVowels = {
  name: 'Bonus Vowels',
  description: 'Vowels are 3 pts, consonants are 1 pt.',
  scoreFunction: 'A function with a word parameter that returns a score based on the number of vowels and consonants.'
};

const scoringAlgorithms = [scrabble, scoreSimple, bonusVowels];

function scorerPrompt() {}

function transform(oldPointStructure) {
  
  for (const [letterValue, letterKey] of Object.entries(oldPointStructure)) {
    for (const letter of letterKey) {
      newPointStructure[letter.toLowerCase()] = letterValue;
    }
  }
  //console.log(newPointStructure)
  return newPointStructure;
};

let newPointStructure={};

function runProgram(arg1) {
   //scoringAlgorithms[initialPrompt].name;
   //initialPrompt();
   transform(oldPointStructure)
   
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScore: simpleScore,
   vowelBonusScore: vowelBonusScore,
   scrabbleScore: scrabbleScore,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};

/*
unmodified starter code
// inspired by https://exercism.io/tracks/javascript/exercises/etl/solutions/91f99a3cca9548cebe5975d7ebca6a85

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 }
 
	  }
	}
	return letterPoints;
 }

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt() {
   console.log("Let's play some scrabble! Enter a word:");
};

let simpleScore;

let vowelBonusScore;

let scrabbleScore;

const scoringAlgorithms = [];
const scoringAlgorithms = [
[name: 'Scrabble',
description: 'The traditional scoring algorithm.',
scoreFunction:'Uses the newPointStructure object to determine the score for a given word.'],
[name: 'Simple Score',
description: 'Each letter is worth 1 point.',
scoreFunction: 'Uses the newPointStructure object to determine the score for a given word.'],
[name: 'Bonus Vowels',
description: 'Vowels are 3 pts, consonants are 1 pt.',
scoreFunction: 'A function with a word parameter that returns a score based on the number of vowels and consonants.']
];

function scorerPrompt() {}

function transform() {};

let newPointStructure;

function runProgram() {
   initialPrompt();
   
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScore: simpleScore,
   vowelBonusScore: vowelBonusScore,
   scrabbleScore: scrabbleScore,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};
*/