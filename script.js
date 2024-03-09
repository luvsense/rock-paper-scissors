function getComputerChoice() {
  // Randomly returns either Rock, Paper, Scissor.
  const choices = ["rock", "paper", "scissor"];
  const chance = Math.floor(Math.random() * choices.length);
  return choices[chance];
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

const playerSelection = prompt(
  `Choose: rock, paper, scissor`,
  ""
).toLowerCase();

const computerSelection = getComputerChoice();
console.log(`Computer Played: ${computerSelection}`);
console.log(`Played Played: ${playerSelection}`);
playRound(computerSelection, playerSelection);
