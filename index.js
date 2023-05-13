// Variables --------------------------------------
// buttons
const Rockbtn = document.querySelector('.rock'); 
const Paperbtn = document.querySelector('.paper');
const Scissorsbtn = document.querySelector('.scissors');
const CRockbtn = document.querySelector('.Crock'); 
const CPaperbtn = document.querySelector('.Cpaper');
const CScissorsbtn = document.querySelector('.Cscissors');
const restartBtn = document.querySelector('#restart');
// screens
const gameScreen = document.querySelector('#gameScreen');
const endScreen = document.querySelector('#endScreen')
// initial screen values (hidden or not)
endScreen.style.display = "none";
gameScreen.style.display = "initial";
//counts
computerCount = 0;
playerCount = 0;
// win counters
const computerScore = document.querySelector('#computerScore');
const playerScore = document.querySelector('#playerScore');
// initial values
computerScore.textContent = computerCount;
playerScore.textContent = playerCount;
// How many wins required for winning
winsToEnd = 5;
// Result div for text content
winLose = document.querySelector('.winLose');;
// -----------------------------------------------------

function getComputerChoice(){
    switch(Math.floor(Math.random() * 3)){
        case 0:
            return "Rock";  
        case 1:
            return "Paper";
        case 2:
            return "Scissors";
    }
}

function playRound(playerSelection, computerSelection){
    console.log(playerSelection, computerSelection);
    if((playerSelection=="Scissors" && computerSelection=="Paper") || (playerSelection=="Paper" && computerSelection=="Rock") || (playerSelection == "Rock" && computerSelection == "Scissors")){
        playerCount += 1;
        console.log(playerCount , computerCount);
    }
    else if(playerSelection==computerSelection){
        return;
    }
    else{
        computerCount += 1;
        console.log(playerCount , computerCount);
    }
    

}

// Game count and events 
Rockbtn.addEventListener('click', () => {
  let computerChoice = getComputerChoice();
  playRound("Rock", computerChoice);
  checkScore();
  updateCounters();
  clearChosen();
  computerButtonAnim(computerChoice);
  Rockbtn.classList.add('chosen');
});

Paperbtn.addEventListener('click', () => {
    let computerChoice = getComputerChoice();
  playRound("Paper", computerChoice);
  checkScore();
  updateCounters();
  clearChosen();
  computerButtonAnim(computerChoice);
  Paperbtn.classList.add('chosen');
});

Scissorsbtn.addEventListener('click', () => {
    let computerChoice = getComputerChoice();

  playRound("Scissors", computerChoice);
  checkScore();
  updateCounters();
  clearChosen();
  computerButtonAnim(computerChoice);
  Scissorsbtn.classList.add('chosen');
});

function clearChosen(){
    Scissorsbtn.classList.remove('chosen');
    Paperbtn.classList.remove('chosen');
    Rockbtn.classList.remove('chosen');
    CRockbtn.classList.remove('chosen');
    CPaperbtn.classList.remove('chosen');
    CScissorsbtn.classList.remove('chosen');
}

function computerButtonAnim(computerChoice){
    if(computerChoice=="Rock"){
        CRockbtn.classList.add('chosen');
    }
    else if(computerChoice=="Paper"){
        CPaperbtn.classList.add('chosen');
    }
    else{
        CScissorsbtn.classList.add('chosen');
    }
}
function checkScore(){ //checks whether someone has won (or lost)
    if(computerCount == winsToEnd || playerCount == winsToEnd){
        if(playerCount == winsToEnd){
            console.log("You win");
            winLose.textContent = "You win!";
        }
        if(computerCount == winsToEnd){
            console.log("You lose");
            winLose.textContent = "You lose :("
        }
        toggleResult();
    }
}
function updateCounters(){
    computerScore.textContent = computerCount;
    playerScore.textContent = playerCount;
}

function toggleResult () {
    gameScreen.style.display = "none";
    endScreen.style.display = "initial";
}

restartBtn.addEventListener('click', () => {
    computerCount = 0;
    playerCount = 0;
    gameScreen.style.display = "initial";
    endScreen.style.display = "none";
    updateCounters();
    clearChosen();
})