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
let computerSelection = getComputerChoice();
console.log(computerSelection);
let playerSelection = prompt("Rock, Paper or Scissors?");
console.log(playerSelection);
function playRound(playerSelection, computerSelection){
    if((playerSelection=="Scissors" && computerSelection=="Paper") || (playerSelection=="Paper" && computerSelection=="Rock") || (playerSelection == "Rock" && computerSelection == "Scissors")){
        alert("You win!");
    }
    else if(playerSelection==computerSelection){
        alert("Tie!");
    }
    else{
        alert("You lose :(");
    }
}
playRound(playerSelection, computerSelection);