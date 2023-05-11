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
        return 1;
    }
    else if(playerSelection==computerSelection){
        return 0;
    }
    else{
        return -1;
    }
}
let count = 0;
const Rockbtn = document.querySelector('#rock');
Rockbtn.addEventListener('click', () => {
  count = count + playRound("Rock", getComputerChoice());
  console.log(count);
  checkScore();
});
const Paperbtn = document.querySelector('#paper');
Paperbtn.addEventListener('click', () => {
  count = count + playRound("Paper", getComputerChoice());
  console.log(count);
  checkScore();
});
const Scissorsbtn = document.querySelector('#scissors');
Scissorsbtn.addEventListener('click', () => {
  count = count + playRound("Scissors", getComputerChoice());
  console.log(count);
  checkScore();
});
function checkScore(){
    if(count==3){
        console.log("You win");
    }
    if(count==-3){
        console.log("You lose");
    }
}

