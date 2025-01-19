
console.log("Welcome to the rock, paper, scissors");

/* Global variables for initialization of human and computer score */
let humanScore = 0;
let computerScore = 0;
let humanSelection;
let computerSelection;
let rounds = 0;




let selectBtn = document.querySelectorAll("button");
//reference to div score 
let scores = document.querySelector("p");
let comChoiceDisplay = document.querySelector("h3");
let finalResult = document.querySelector("h4");


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
    scores.textContent=`${humanScore} - ${computerScore}`;
    console.log(humanScore);
    console.log(computerScore);
    }


function getComputerChoice(){
    let int_choice = Math.floor(Math.random()*3)+1;
    let str_choices = ["ROCK", "PAPER","SCISSORS"];
    if (int_choice == 1){
        console.log("Computer chose rock");
    } else if (int_choice == 2) {
        console.log("Computer chose paper");
    } else{
        console.log("Computer chose scissors");
    }
    let str_choice = str_choices[int_choice-1];

    comChoiceDisplay.textContent=`Computer chose: ${str_choice}`;
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
    rounds++;
    if (rounds==5){
        if (humanScore>computerScore){
            finalResult.textContent="you won";

        }
        else if (humanScore<computerScore){
            finalResult.textContent="computer won";
        }else{
            finalResult.textContent="tie";
        }
        rounds=0;
    }
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




