

let container = document.querySelector(".container");
const createNewGridBtn = document.querySelector(".new-grid");


createNewGridBtn.addEventListener("click",() => {
  let gridValue = prompt("Enter the new grid size");
  const intGrid = parseInt(gridValue,10);
  console.log(intGrid);
  
});
//takes in the value of the grid (doesnt differentiate the rows and columns)
for (let rows=0; rows<20; rows++){
    for(let columns=0; columns<20; columns++){
        let div = document.createElement("div");
        //add a `grid-item` class to the div
        div.classList.add("grid-item");
        container.appendChild(div);
    }

}
document.getElementsByClassName(".grid-item").onmouseover = function() {mouseOver()};

function mouseOver() {
  document.getElementsByClassName(".grid-item").style.background= "red";
}



