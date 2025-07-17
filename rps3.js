



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
    let yourRpsPick = window.prompt("Rock, Paper, or Scissors? Choose wisely!").toLowerCase() ;
    return yourRpsPick;
}

// function logs choice in console and returns winner/loser/tie string, increments score

function playRound(humanChoice, computerChoice) {
    console.log("You picked " + humanSelection)
    console.log("Computer picked " + computerSelection)
    if (humanChoice === computerChoice) {
        return "Tie, throw hands again!";
    }
    else if (humanChoice === "paper" && computerChoice === "rock" || 
             humanChoice === "rock" && computerChoice === "scissors" ||
             humanChoice === "scissors" && computerChoice === "paper") {
                 ++humanScore
                 return "Good throw. Point goes to you!";
                }
    else (humanChoice === "paper" && computerChoice === "scissors" ||
        humanChoice === "rock" && computerChoice === "paper" ||
          humanChoice === "scissors" && computerChoice === "rock") 
          ++computerScore;
          return "Poor choice. Computer wins this round";     
}

const humanSelection = getHumanChoice();
const computerSelection =getComputerChoice();
console.log(playRound(humanSelection, computerSelection)) ;
console.log("Your score = " + humanScore, "----" , "Computer score = " + computerScore)

function playGame() {
    let rounds= 0 
    while (rounds > 5) {
        const gameHumanChoice = getHumanChoice();
        const gameComputerChoice = getComputerChoice();
        playRound(gameHumanChoice, gameComputerChoice);
        rounds++
    }
    if (humanScore > computerScore) {
        humanScore++
        console.log(++humanScore)
        return ('You Win!' &{humanScore} &{computerScore});
    }
    else if (humanScore < computerScore) {
        
        console.log(computerScore);
        return 'You Lose!'
    }
    else{
        return 'Draw!'
    }
}

console.log(playGame())