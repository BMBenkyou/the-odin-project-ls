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
    return add(n1,n2);
  }
  else if (operator == "-"){
    return subtract(n1,n2);
  }else if (operator == "*"){
    return multiply(n1,n2);
  }else{
    return divide(n1,n2);
  }

}


let display = document.querySelector(".display");
//store the values clicked by the user
let values =[];
let operands = [];
let x="";
let operators = ["+","-","*","/","="];
let answer;
let calculated_value;
let index_splice=0;




//needs to store the numbers in operand vars
document.querySelectorAll(".btn").forEach(button =>{
  button.addEventListener("click", (event)=>{
    const value = event.target.getAttribute("data-value");
    if (value === "clear") {
      // Clear the display and reset all variables
      display.textContent = "0";
      values = [];
      x = "";
      answer = "";
      return; 
    }
    //checks if the first value is an operator
    if(operators.includes(value)){
      if(x){
        x=parseFloat(x);
        values.push(x);
        values.push(value);
        x="";

      }
    }

    else{
      x+=value;
    }
    console.log(values);

    if (values.length > 2) {
      calculated_value = operate(values[1], values[0], values[2]);

      // update the array for next operation 
      if (values[3] !== "=") {
        values = [calculated_value, values[3]]; // Update the array with the result and the next operator
      } else {
        answer = calculated_value; // If "=", store the final answer
        values = []; // Reset the array
        x = ""; // Reset the current operand
      }
    }

    // Update the display
    display.textContent = x || answer || "_"; // Display answer
  });
});


const year = document.querySelector("footer .year");
year.textContent = new Date().getFullYear();
