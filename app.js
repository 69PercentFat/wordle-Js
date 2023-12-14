// Add your words here
const words = ["apple", "banana", "orange", "grape", "kiwi"];

// Choose a random word from the array
const randomWord = words[Math.floor(Math.random() * words.length)];

// Initialize variables
let displayWord = "_".repeat(randomWord.length);
let incorrectGuesses = 0;

// Display the initial state of the word
document.getElementById("word-display").innerText = displayWord;

// Function to check the user's guess
function checkGuess() {
    const guessInput = document.getElementById("guess-input").value.toLowerCase();

    if (guessInput.length === 1 && randomWord.includes(guessInput)) {
        // Update displayWord with correctly guessed letter
        for (let i = 0; i < randomWord.length; i++) {
            if (randomWord[i] === guessInput) {
                displayWord = displayWord.substr(0, i) + guessInput + displayWord.substr(i + 1);
            }
        }

        // Update displayed word
        document.getElementById("word-display").innerText = displayWord;

        // Check if the entire word has been guessed
        if (displayWord === randomWord) {
            document.getElementById("result").innerText = "Congratulations! You guessed the word!";
        }
    } else {
        // Incorrect guess
        incorrectGuesses++;

        // Check if the maximum number of incorrect guesses is reached
        if (incorrectGuesses === 6) {
            document.getElementById("result").innerText = "Sorry, you've run out of guesses. The word was: " + randomWord;
        }
    }

    // Clear the input field
    document.getElementById("guess-input").value = "";
}
