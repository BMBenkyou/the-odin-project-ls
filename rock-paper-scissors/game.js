console.log("Welcome to the rock, paper, scissors")

function getComputerChoice(){
    const int_choice = Math.floor(Math.random()*3);
    if (int_choice == 0){
        return 'rock'
    } else if (int_choice == 1) {
        return 'scissors';
    } else{
        return 'paper';
    }
}

const comp =getComputerChoice()
console.log(comp)
