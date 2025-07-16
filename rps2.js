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

function getHumanChoice() {
    let humanChoice = window.prompt("Rock, Paper, or Scissors? Choose wisely!").toLowerCase() ;
    return humanChoice;
}

console.log("You chose " + getHumanChoice())
console.log("Computer chose " + getComputerChoice())