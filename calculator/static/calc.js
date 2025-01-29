let operand1;
let operand2;
let operator;

console.log(operand1);

//basic math functions
function add(n1,n2){
  return n1+n2

}

function subtract(n1,n2){
  return n1-n2;

}
function multiply(n1,n2){
  return n1*n2;

}
function divide(n1,n2){
  return n1/n2;

}

//calls the math functions based on operator
function operate(operator,n1,n2){
  if (operator == "+"){
    console.log(add(n1,n2));
  }
  else if (operator == "-"){
    console.log(subtract(n1,n2));
  }else if (operator == "*"){
    multiply(n1,n2);
    console.log(multiply(n1,n2));
  }else{
    console.log(divide(n1,n2));
  }

}


let display = document.querySelector(".display");
//store the values clicked by the user
let values =[];
let operands = [];
let x="";
let operators = ["+","-","*","/","="];

//clear button clears out the array
//



//needs to store the numbers in operand vars
document.querySelectorAll(".btn").forEach(button =>{
  button.addEventListener("click", (event)=>{
    const value = event.target.getAttribute("data-value");
    //checks if the first value is an operator
    if(operators.includes(value)){
      if(x){
        x=parseInt(x)
        values.push(x);
        values.push(value);
        x="";

      }
    }

    else{
      x+=value;
    }

    if(values.length>2){
      operate(values[1],values[0],values[2]);
    }
    console.log(values);


  });
});
