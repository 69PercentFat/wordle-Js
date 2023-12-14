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

        updateWordDisplay();
        checkGameStatus();
    } else {
        incorrectGuesses++;
        updateWordDisplay();
        checkGameStatus();
    }

    document.getElementById("guess-input").value = "";
}

function updateWordDisplay() {
    const wordDisplayContainer = document.getElementById("word-display-container");
    wordDisplayContainer.innerHTML = "";

    for (let i = 0; i < displayWord.length; i++) {
        const letterBox = document.createElement("div");
        letterBox.classList.add("letter-box");
        if (displayWord[i] !== "_") {
            letterBox.innerText = displayWord[i];
            letterBox.classList.add("correct");
        }
        wordDisplayContainer.appendChild(letterBox);
    }
}

function checkGameStatus() {
    if (displayWord === randomWord) {
        document.getElementById("result").innerText = "Congratulations! You guessed the word!";
        document.getElementById("result").style.color = "#4CAF50";
        disableInput();
    } else if (incorrectGuesses === maxAttempts) {
        document.getElementById("result").innerText = `Sorry, you've run out of guesses. The word was: ${randomWord}`;
        document.getElementById("result").style.color = "#FF3333";
        disableInput();
    }
}

function disableInput() {
    document.getElementById("guess-input").disabled = true;
    document.getElementById("submit-btn").disabled = true;
}
