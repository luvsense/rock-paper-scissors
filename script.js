function getComputerChoice() {
  // Randomly returns either Rock, Paper or Scissor.
  const choices = ["rock", "paper", "scissor"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function playRound(computerSelection, playerSelection) {
  // Plays a single round of Rock, Paper, Scissor.
  if (computerSelection === playerSelection) {
    console.log("It's a TIE!");
  } else if (
    (computerSelection === "rock" && playerSelection === "scissor") ||
    (computerSelection === "paper" && playerSelection === "rock") ||
    (computerSelection === "scissor" && playerSelection === "paper")
  ) {
    console.log("Computer Wins!");
  } else {
    console.log("Player Wins!");
  }
}

// Prompts user for an Input and converts it to lowercase
const playerSelection = prompt(
  `Choose: rock, paper, scissor`,
  ""
).toLowerCase();

// Holds computer selection value returned by fucntion in a constant.
const computerSelection = getComputerChoice();

console.log(`Computer Played: ${computerSelection}`);
console.log(`Player Played: ${playerSelection}`);

// Executes one round of game.
playRound(computerSelection, playerSelection);
