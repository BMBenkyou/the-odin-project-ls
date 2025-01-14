console.log("Welcome to the rock, paper, scissors");

/* Global variables for initialization of human and computer score */
let humanScore = 0;
let computerScore = 0;


function playRound(humanChoice,computerChoice){
    if (humanChoice == computerChoice){
        console.log("tie");
    }
    else if ((humanChoice == 1 && computerChoice == 3) || (humanChoice==2 && computerChoice==1) || (humanChoice==3 && computerChoice==2)){
        console.log("you won");
        humanScore++;
    }
    else {
        console.log("you lost");
        computerScore++;
    
    }
    console.log(humanScore);
    console.log(computerScore);
    }


function getComputerChoice(){
    let int_choice = Math.floor(Math.random()*3)+1;
    if (int_choice == 1){
        console.log("Computer chose rock");
    } else if (int_choice == 2) {
        console.log("Computer chose paper");
    } else{
        console.log("Computer chose scissors");
    }
    return int_choice;
}

function playGame(human,comp){
    playRound(human,comp);
}

function getHumanChoice(){
    let int_choice =prompt("Please enter your choice \n1: rock\n2: paper\n3: scissors");
    return int_choice;
}

let humanSelection;
let computerSelection;

for (let i=0; i<5; i++){
    humanSelection=getHumanChoice();
    computerSelection = getComputerChoice();
    playGame(humanSelection, computerSelection);
}

