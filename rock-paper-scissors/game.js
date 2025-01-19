

console.log("Welcome to the rock, paper, scissors");

/* Global variables for initialization of human and computer score */
let humanScore = 0;
let computerScore = 0;


// TODO: get the buttons of selection
//
let selectBtn = document.querySelectorAll("button");

selectBtn.forEach((button) =>{
    button.addEventListener("click", () =>{
        getHumanChoice(button.textContent);
    });
});
//


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

function getHumanChoice(buttonText){
    console.log(buttonText);
}

let humanSelection;
let computerSelection;

for (let i=0; i<5; i++){
    humanSelection=getHumanChoice();
    computerSelection = getComputerChoice();
    playGame(humanSelection, computerSelection);
}

