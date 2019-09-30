
const rock_weapon = document.getElementById("rock");
const paper_weapon = document.getElementById("paper");
const scissors_weapon = document.getElementById("scissors");
const scoreboard_computer = document.getElementById("computerScore");
const scoreboard_player = document.getElementById("playerScore");
const result = document.querySelector(".result");
let computerScore =0;
let playerScore=0;
let whoWon;

function computerPlay() {
    const computerWeapon=['rock', 'paper', 'scissors'];
    let randomChoice=Math.floor(Math.random()*3);
    return computerWeapon[randomChoice];
}

function playRound ( playerChoice){
    computerChoice = computerPlay();
    console.log('Player Choice: ', playerChoice);
    console.log('Computer Choice: ',computerChoice);
    if (computerChoice === playerChoice){
        console.log("It's a tie!");
        result.innerHTML = `It's a tie between ${computerChoice}`;
        whoWon="noone";
    }
    else if (computerChoice === "paper" && playerChoice ==="rock" || computerChoice === "rock" && playerChoice ==="scissors" || computerChoice === "scissors" && playerChoice==="paper"){
        console.log("Computer wins this round");
        result.innerHTML = `Computer's ${computerChoice} beats your ${playerChoice}!`;
        whoWon="computer";
    }
    else {
        console.log("You won!");
        result.innerHTML = `Your ${playerChoice} beats Computer's ${computerChoice}!`;
        whoWon="player";
    }
    updateScoreboard(whoWon);


}
function updateScoreboard(whoWon){
    if (whoWon === "player"){
        playerScore++;
    }
    else if (whoWon ==="computer"){
        computerScore++;
    }
    scoreboard_computer.innerHTML = computerScore;
    scoreboard_player.innerHTML = playerScore;
    isGameOver(computerScore, playerScore);
}
function isGameOver(computer, player){
    scoreboard_computer.innerHTML = computer;
    scoreboard_player.innerHTML = player;
    if(player>5){
        alert('Game Over You Won!!!');
        computerScore=0;
        playerScore =0;

    }
    else if(computer>5){
        alert('Game Over You Lost!!!');
        computerScore=0;
        playerScore =0;
    }
    scoreboard_computer.innerHTML = computerScore;
    scoreboard_player.innerHTML = playerScore;
}

function game(){
    computer_weapon = computerPlay();
    rock_weapon.addEventListener('click', function() {
        playRound( "rock");
    });
    paper_weapon.addEventListener('click', function (){
        playRound( "paper");
    });
    scissors_weapon.addEventListener('click', function (){
        playRound("scissors");
    });


}
game();


