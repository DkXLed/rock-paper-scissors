//RPS


function getComputerChoice() { 
    const randomNumber = Math.random();

    if (randomNumber <=.33) {
        return "Computer threw Rock" ;
    }
    else if (randomNumber >= .34 && randomNumber <= .66) {
        return "Computer threw Paper" ;
    }
    else return "Computer threw Scissors" ;
    
}

function getHumanChoice() {
    
    let handThrow= window.prompt("Rock, Paper, or Scissors? Choose Wisely!");
    if (handThrow==="rock") {
        return("You threw Rock") ;
    }
    else if (handThrow==="paper") {
        return("You threw Paper") ;
    }
    else {
        return("You threw Scissors") ;
    }
}

console.log(getHumanChoice())
console.log(getComputerChoice())
