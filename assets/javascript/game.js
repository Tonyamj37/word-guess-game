//alert("word game")

// Create an array of words 
var animals = ["dog", "cat", "mouse", "horse", "elephant", "lion", "pig", "octopus", "rhino", "giraffe", "frog", "dolphin", "monkey", "hippopotamus", "bear"]
console.log (animals)
var letter = animal.charAt(i);
console.log (letter)
// Create variables for functions
var chosenWord = "";
var guessedLetters = [];
var ansWordArr = [];
var maxNumGuesses = 5;
var numGuesses = 0;
var numWins = 0;
var numLosses = 0;
var isFinished = false;

var ansWord = animal.charAt(i);
console.log (ansWord)
function restart() {
// // Choose word randomly
var ansWord = animals[Math.floor(Math.random() * animals.length)];
console.log (ansWord)
    ansWordArr = [];
// Sets up the answerArray to show how many letters there are using "_"
for (var i = 0; i < animals.length; i++){
    answerArray[i] = "_";
    }

numGuesses = maxNumGuesses;
guessedLetters = [];

updateScreen();

}
// Funtion that submits value
function updateScreen() {
document.getElementById("numWins").innerHTML = numWins;
document.getElementById("numLosses").innerHTML = numLosses;
document.getElementById("numGuesses").innerHTML = numGuessesRemaining;
document.getElementById("answerWord").innerHTML = ansWordArr.join("");
document.getElementById("guessedLetters").innerHTML = guessedLetters;

}
function checkGuess(letter) {

if (guessedLetters.indexOf(letter) === -1) {
    guessedLetters.push(letter);
    if (ansWord.indexOf(letter) === -1) {
        numGuessesRemaining--;
    } else {
        for (var i = 0; i < ansWord.length; i++) {
            if (letter === ansWord[i]) {
                ansWordArr[i] = letter;
            } 
        }                
    }
}
}