let humanScore = 0;
let computerScore = 0;

// function to have computer choose 
function getComputerChoice() {
    const randomNumber = Math.random();
    if (randomNumber <= .33) {
        return "rock" ;
    } else if (randomNumber <= .66) {
        return "paper" ;
    } else {
        return "scissors" ;
    }
}

// function to prompt human to choose
function getHumanChoice() {
    let humanChoice = window.prompt("Rock, Paper, or Scissors? Choose wisely!").toLowerCase() ;
    return humanChoice;
}

console.log("You chose " + getHumanChoice())
console.log("Computer chose " + getComputerChoice())



