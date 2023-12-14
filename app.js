const words = ["apple", "banana", "orange", "grape", "kiwi"];
const maxAttempts = 6;

let randomWord = words[Math.floor(Math.random() * words.length)];
let displayWord = "_".repeat(randomWord.length);
let incorrectGuesses = 0;

document.getElementById("word-display").innerText = displayWord;

function checkGuess() {
    const guessInput = document.getElementById("guess-input").value.toLowerCase();

    if (guessInput.length === 1 && randomWord.includes(guessInput)) {
        for (let i = 0; i < randomWord.length; i++) {
            if (randomWord[i] === guessInput) {
                displayWord = displayWord.substr(0, i) + guessInput + displayWord.substr(i + 1);
            }
        }

        document.getElementById("word-display").innerText = displayWord;

        if (displayWord === randomWord) {
            document.getElementById("result").innerText = "Congratulations! You guessed the word!";
            document.getElementById("result").style.color = "#4CAF50";
            disableInput();
        }
    } else {
        incorrectGuesses++;

        if (incorrectGuesses === maxAttempts) {
            document.getElementById("result").innerText = `Sorry, you've run out of guesses. The word was: ${randomWord}`;
            document.getElementById("result").style.color = "#FF3333";
            disableInput();
        }
    }

    document.getElementById("guess-input").value = "";
}

function disableInput() {
    document.getElementById("guess-input").disabled = true;
    document.getElementById("submit-btn").disabled = true;
}
