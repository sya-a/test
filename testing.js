const prompt = require("prompt-sync")({ sigint: true });

// Function to generate a random number between 1 and 100
function generateRandomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}

// Function to play the game
function playGame() {
  // Random number from 1 - 100
  let numberInMind = generateRandomNumber();

  // This variable is used to determine if the app should continue prompting the user for input
  let foundCorrectNumber = false;

  console.log("Welcome to the Number Guessing Game!");
  console.log("I'm thinking of a number between 1 and 100.");

  while (!foundCorrectNumber) {
    // Step 1: Get user input (don't forget that the input is a string)
    const userGuessStr = prompt("Take a guess: ");
    const userGuess = parseInt(userGuessStr);

    // Step 2: Compare the guess to the secret answer and
    // let the user know the feedback (too large, too small, correct).
    if (isNaN(userGuess)) {
      console.log("Invalid input. Please enter a valid number.");
    } else {
      if (userGuess === numberInMind) {
        console.log(
          `Congratulations! You've guessed the correct number ${numberInMind}!`
        );
        foundCorrectNumber = true;
      } else if (userGuess < numberInMind) {
        console.log("Too small! Try again.");
      } else {
        console.log("Too large! Try again.");
      }
    }
  }

  // Bonus Point: prompt user and provide an option for the user to start a new game after winning
  const playAgain = prompt("Do you want to start a new game? (Y/N): ");

  if (playAgain.toUpperCase() === "Y") {
    playGame(); // Start a new game if the player wants to play again
  } else {
    console.log("Thanks for playing! Goodbye!");
  }
}

// Start the game by calling the playGame function
playGame();
