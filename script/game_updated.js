const scoreboard_computer = document.getElementById("computerScore");
const scoreboard_player = document.getElementById("playerScore");
const result = document.querySelector(".result");
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

trigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);

function computerPlay() {
  const computerWeapon = ["Rock", "Paper", "Scissors"];
  let randomChoice = Math.floor(Math.random() * 3);
  return computerWeapon[randomChoice];
}

function playRound(playerChoiceLowerCase) {
  computerChoice = computerPlay();
  let playerChoice =
    playerChoiceLowerCase.charAt(0).toUpperCase() +
    playerChoiceLowerCase.substring(1);
  if (computerChoice === playerChoice) {
    result.innerHTML = `It's a ${computerChoice} tie!`;
    whoWon = "noone";
  } else if (
    (computerChoice === "Paper" && playerChoice === "Rock") ||
    (computerChoice === "Rock" && playerChoice === "Scissors") ||
    (computerChoice === "Scissors" && playerChoice === "Paper")
  ) {
    result.innerHTML = `Bot's ${computerChoice} beats your ${playerChoice}!`;
    whoWon = "Bot";
  } else {
    result.innerHTML = `Your ${playerChoice} beats Bot's ${computerChoice}!`;
    whoWon = "You";
  }
  return whoWon;
}

function updateScoreboard(whoWon) {
  if (whoWon === "You") {
    playerScore++;
  } else if (whoWon === "Bot") {
    computerScore++;
  }
  scoreboard_computer.innerHTML = computerScore;
  scoreboard_player.innerHTML = playerScore;
}

function isGameOver() {
  let gameOver = false;
  let computerScoreHTML = scoreboard_computer.innerHTML;
  let playerScoreHTML = scoreboard_player.innerHTML;
  if (computerScoreHTML === "5") {
    gameOver = true;
  } else if (playerScoreHTML === "5") {
    gameOver = true;
  }
  return gameOver;
}

function game() {
  window.addEventListener("click", function (e) {
    // this.console.log(e.path [1].id);
    const buttonSelected = document.querySelector(
      `.weapon[data-key="${e.path[1].id}"]`
    );
    const audio = document.querySelector(`audio[data-key="${e.path[1].id}"]`);
    const resultDisplay = document.querySelector(".result");
    resultDisplay.classList.remove("gameOver");

    if (!audio) return; // dont play if user doesn't select button
    audio.play();
    buttonSelected.classList.add("playing");

    let winner = playRound(e.path[1].id);
    updateScoreboard(winner);
    if (isGameOver()) {
      resultDisplay.classList.add("gameOver");
      result.innerHTML = `${winner} won! Select a button to clear the score and start a new game!`;
      playerScore = 0;
      computerScore = 0;
    }
  });
  function removeTransition(e) {
    if (e.propertyName !== "transform") return;
    this.classList.remove("playing");
  }
  const weapons = document.querySelectorAll(".weapon");
  weapons.forEach((weapon) =>
    weapon.addEventListener("transitionend", removeTransition)
  );
}

game();
