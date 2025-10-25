// Stone Paper Scissors Game
// Run this in Node.js

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const choices = ["stone", "paper", "scissor"];

function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function getResult(user, computer) {
  if (user === computer) return "It's a tie!";
  if (
    (user === "stone" && computer === "scissor") ||
    (user === "paper" && computer === "stone") ||
    (user === "scissor" && computer === "paper")
  ) {
    return "You win!";
  } else {
    return "Computer wins!";
  }
}

function playGame() {
  rl.question("Enter your choice (stone / paper / scissor): ", (userChoice) => {
    userChoice = userChoice.toLowerCase();

    if (!choices.includes(userChoice)) {
      console.log("❌ Invalid choice! Please enter stone, paper, or scissor.");
      return playGame();
    }

    const computerChoice = getComputerChoice();
    console.log(`💻 Computer chose: ${computerChoice}`);

    const result = getResult(userChoice, computerChoice);
    console.log(`🎯 Result: ${result}`);

    rl.question("Do you want to play again? (yes/no): ", (answer) => {
      if (answer.toLowerCase() === "yes") {
        playGame();
      } else {
        console.log("👋 Thanks for playing!");
        rl.close();
      }
    });
  });
}

console.log("🪨📄✂️ Welcome to Stone Paper Scissor Game!");
playGame();
