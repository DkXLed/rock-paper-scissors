// function to get computer choice

function getComputerChoice() {
    const randomNumber = Math.random();
    if (randomNumber <= .33) {
        return "rock";
    } else if (randomNumber <= .66) {
        return "paper";
    } else {
        return "scissors";
    }
}

// function to prompt human to choose

function getHumanChoice() {
    let yourRpsPick = window.prompt("Rock, Paper, or Scissors? Choose wisely!").toLowerCase();
    return yourRpsPick;
}

let humanScore = 0;
let computerScore = 0;

// function logs choice in console and returns winner/loser/tie string, increments score

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return "Tie, throw hands again!"
    } else if (humanChoice === "paper" && computerChoice === "rock" ||
        humanChoice === "rock" && computerChoice === "scissors" ||
        humanChoice === "scissors" && computerChoice === "paper") {
        humanScore++;
        return "Good throw. Point goes to you!";
    } else { 
        computerScore++;
        return "Poor choice. Computer wins this round";
    }
}




function playGame() {
    let rounds = 0;

    while (humanScore < 5 && computerScore < 5) {
        let gameHumanChoice = getHumanChoice();
        let gameComputerChoice = getComputerChoice();
        console.log("You picked " + gameHumanChoice + "         Computer picked " + gameComputerChoice);
        let roundResult = playRound(gameHumanChoice, gameComputerChoice);

        if (roundResult.includes("Point goes to you!")) { 
        } else if (roundResult.includes("Computer wins this round")) { 
        }
        
        console.log("Current Score: You = " + humanScore + ", Computer = " + computerScore); 
        rounds++; 
    }

    // Determine the overall winner after 5 wins
    if (humanScore === 5) {
        console.log("You win the game!");
    } else if (computerScore === 5) {
        console.log("Computer wins the game!");
    }
}

playGame(); 
