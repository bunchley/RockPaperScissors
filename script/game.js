const rock_weapon = document.getElementById("rock");
const paper_weapon = document.getElementById("paper");
const scissors_weapon = document.getElementById("scissors");
const scoreboard_computer = document.getElementById("computerScore");
const scoreboard_player = document.getElementById("playerScore");
const result = document.querySelector(".result");
const gameEnd = document.querySelector(".game-over");
const playButton = document.querySelector(".play");
const weaponDisplay = document.querySelector(".weapon-container");
const scoreDisplay = document.querySelector(".scoreboard-container");
let computerScore = 0;
let playerScore = 0;
let whoWon;

//modal
var modal = document.querySelector(".modal");
var trigger = document.querySelector(".trigger-help");
var closeButton = document.querySelector(".close-button");

function toggleModal() {
  modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
  if (event.target === modal) {
    toggleModal();
  }
}
function displayGame() {
  console.log("Play button removed");
  playButton.remove();
  console.log("Weapons visible");
  weaponDisplay.classList.toggle("hidden");
  weaponDisplay.classList.toggle("visible");
  console.log("Score Container visible");
  scoreDisplay.classList.toggle("hidden");
  scoreDisplay.classList.toggle("visible");
}

trigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);

playButton.addEventListener("click", displayGame);

function getComputerChoice() {
  const computerWeapon = ["Rock", "Paper", "Scissors"];
  let randomChoice = Math.floor(Math.random() * 3);
  return computerWeapon[randomChoice];
}

function playRound(playerChoice, computerChoice = getComputerChoice()) {
  //   computerChoice = getComputerChoice();
  console.log("Player Choice: ", playerChoice);
  console.log("Computer Choice: ", computerChoice);
  if (computerChoice === playerChoice) {
    console.log("It's a tie!");
    result.innerHTML = `It's a ${computerChoice} tie!`;
    whoWon = "noone";
  } else if (
    (computerChoice === "Paper" && playerChoice === "Rock") ||
    (computerChoice === "Rock" && playerChoice === "Scissors") ||
    (computerChoice === "Scissors" && playerChoice === "Paper")
  ) {
    console.log("Computer wins this round");
    result.innerHTML = `Bot's ${computerChoice} beats your ${playerChoice}!`;
    whoWon = "computer";
  } else {
    console.log("You won!");
    result.innerHTML = `Your ${playerChoice} beats Bot's ${computerChoice}!`;
    whoWon = "player";
  }
  updateScoreboard(whoWon);
}

function updateScoreboard(whoWon) {
  if (whoWon === "player") {
    playerScore++;
  } else if (whoWon === "computer") {
    computerScore++;
  }
  scoreboard_computer.innerHTML = computerScore;
  scoreboard_player.innerHTML = playerScore;
  isGameOver(computerScore, playerScore);
}
function isGameOver(computer, player) {
  if (player === 5) {
    gameEnd.innerHTML = "You Win!!!";
    gameOver = true;
  } else if (computer === 5) {
    gameEnd.innerHTML = "You Lose!!!";
    gameOver = true;
  }
  return gameOver;
}

function game() {
  computer_weapon = getComputerChoice();
  rock_weapon.addEventListener("click", function () {
    playRound("Rock");
  });
  paper_weapon.addEventListener("click", function () {
    playRound("Paper");
  });
  scissors_weapon.addEventListener("click", function () {
    playRound("Scissors");
  });
}
game();
