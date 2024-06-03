let secretNumber = Math.floor(Math.random() * 10) + 1;
let messageElement = document.getElementById("message");
let guessInput = document.getElementById("guess");
let submitButton = document.getElementById("submit");

submitButton.addEventListener("click", (event) => {
  event.preventDefault();
  let guess = parseInt(guessInput.value);

  if (isNaN(guess) || guess < 1 || guess > 10) {
    messageElement.textContent =
      "Invalid input! Please enter a number between 1 and 10";
  } else if (guess < secretNumber) {
    messageElement.textContent = "Too low! Try again.";
  } else if (guess > secretNumber) {
    messageElement.textContent = "Too high! Try again.";
  } else {
    messageElement.textContent = "Congratulations! You guessed the number.";
    secretNumber = Math.floor(Math.random() * 10) + 1;
  }

  guessInput.value = "";
});
