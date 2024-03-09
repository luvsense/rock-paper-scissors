console.log("Hello World");

function getComputerChoice() {
  // Randomly returns either Rock, Paper, Scissor.
  const choices = ["rock", "paper", "scissors"];
  const chance = Math.floor(Math.random() * choices.length);
  console.log(choices[chance]);
}
function getplayerSelection(playerSelection) {
  // Takes the player selection for the round.
}
function playRound(getComputerChoice, getplayerSelection) {
  // Plays a single round of Rock, Paper, Scissor.
}

getplayerSelection("Rock");
getComputerChoice();
