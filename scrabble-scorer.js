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

let newPointStructure = transform(oldPointStructure)

function transform(oldPointStructure){
	 let newobje ={};
   for(let score in oldPointStructure)
     for(let i=0;i<oldPointStructure[score].length;i++){
     newobje[(oldPointStructure[score][i]).toLowerCase()]=Number(score);
    }
    return newobje;
 }
 
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
  let welcome = input.question(`Welcome to the Scrabble score calculator! Which scoring algorithm would you like to use?

  0 - Scrabble: The traditional scoring algorithm.
  1 - Simple Score: Each letter is worth 1 point.
  2 - Bonus Vowels: Vowels are worth 3 pts, and consonants are 1 pt.

  Enter 0, 1, or 2: `)

return welcome;
};

let simpleScore;
let vowelBonusScore;
let scrabbleScore;

let scrabble = {
    name: 'Scrabble',
    description: 'The traditional scoring algorithm.',
    scoreFunction:   function (word, newPointStructure){
      let total=0;
      for (let i = 0; i < word.length; i++){
        total +=(newPointStructure[word[i].toLowerCase()]);
        }
      return total;
    }
};

let scoreSimple = {
  name: "Simple Score",
  description: "Each letter is worth 1 point",
  scoreFunction: function (word){
    return word.length;
    }
};

let bonusVowels = {
  name: "Bonus Vowels",
  description: "Vowels are 3 pts. consonants are 1 pts.",
  scoreFunction:
  function(word){
   let total=0;
   let vowels=['a','e','i','o','u'];
   for (let i = 0; i < word.length; i++) {
     if(vowels.includes(word[i])) {
     total += 3 }
     else if(word[i]===' '){
     }
     else {total += 1}
    }
    return total;
  }
};

let scoringAlgorithms = [scrabble, scoreSimple, bonusVowels];

function scorerPrompt() {
  let score = initialPrompt();
    if(score!=='0' && score!=='1' && score!=='2')
     {
      while(score!=='0' && score!=='1' && score!=='2'){
        console.log(`\n ---INVALID INPUT. PLEASE FOLLOW INSTRUCTION !!--- \n`)
        score = initialPrompt(); 
      }		
    }

  console.log(`\n Using algorithm: ${scoringAlgorithms[score].name}\n`)

  let newWord;
  while(newWord!==('stop')){
    newWord=getWord()
    if(newWord==='stop'){
      console.log(`\n --- THANK YOU FOR USING SCRABBLE SCORER !--- \n`)
    	break;
    }
     if(score === '2' || score === '1'){
     console.log(`Score for '${newWord}' is:  ${scoringAlgorithms[score].scoreFunction(newWord)}`);
    }else if(score === '0'){
     console.log(`Score for '${newWord}' is ${scoringAlgorithms[score].scoreFunction(newWord, newPointStructure)} `)
    }
  }
}

function getWord() {
let word = input.question("Enter a word to be scored, or 'stop' to quit:");
return word.toLowerCase();
}

function runProgram(newPointStructure) {
   scorerPrompt(); 
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