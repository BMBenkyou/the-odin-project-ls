
console.log("Welcome to the rock, paper, scissors");

/* Global variables for initialization of human and computer score */
let humanScore = 0;
let computerScore = 0;
let humanSelection;
let computerSelection;



let selectBtn = document.querySelectorAll("button");

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

selectBtn.forEach((button) =>{
    button.addEventListener("click", () =>{
    humanSelection = getHumanChoice(button.textContent);
    computerSelection = getComputerChoice();
    playGame(humanSelection,computerSelection);
    });
});

function getHumanChoice(buttonText){
    if (buttonText == "ROCK"){
        return 1;
    }
    else if (buttonText == "PAPER"){
        return 2;
    }
    else{
        return 3;
    }
}




