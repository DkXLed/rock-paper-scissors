//RPS


function getComputerChoice() { 
    const randomNumber = Math.random();

    if (randomNumber <=.33) {
        return "rock" ;
    }
    else if (randomNumber >= .34 && randomNumber <= .66) {
        return "paper" ;
    } else {
        return "scissors" ;
        }
    
}

function getHumanChoice() {
    
    let handThrow = window.prompt("Rock, Paper, or Scissors? Choose Wisely!").toLowerCase();
    if (handThrow==="rock") {
        return "rock" ;
    }
    else if (handThrow==="paper") {
        return "paper" ;
    }
    else {
        return "scissors" ;
    }
}

console.log(getHumanChoice())
console.log(getComputerChoice())

function playRound(humanChoice , computerChoice) {
    
    if ( humanSelection === computerSelection) {
        return("Tie, try again");
    }
    else if(humanSelection === "rock" && computerSelection === "scissors"){
        return("Rock beats scissors! Take that, Chip") ;
    }
    else if (humanSelection === "rock" && computerSelection === "paper") {
        return("Paper beats rock! The machines are learning your moves.") ;
    }
    else if (humanSelection === "paper" && computerSelection === "scissors") {
        return("Scissors beats paper! Can the machine read your thoughts?");
    }
    else if (humanSelection === "paper" && computerSelection === "rock") {
        return("Paper beats rock! We covered that in a previous section.");
    }
    else if (humanSelection === "scissors" && computerSelection === "paper") {
        return("Scissors beats paper! Cuts like a knife!") ;
    }
    else if (humanSelection === "scissors" && computerSelection === "rock") {
        return("Rock beats scissors! Crushing, isn't it?") ;
    }
}

const humanSelection = getHumanChoice() ;
const computerSelection = getComputerChoice() ;

playRound(humanSelection , computerSelection) ;

console.log(playRound(humanSelection, computerSelection))