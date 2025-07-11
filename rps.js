//RPS

function getComputerChoice() { 
    const randomNumber = Math.random();

    if (randomNumber <=.33) {
        return "Rock" ;
    }
    else if (randomNumber >= .34 && randomNumber <= .66) {
        return "Paper" ;
    }
    else return "Scissors" ;
    
}

console.log(getComputerChoice())
