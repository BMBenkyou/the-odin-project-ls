const root = document.documentElement;
let container = document.querySelector(".container");
const createNewGridBtn = document.querySelector(".new-grid");
const colorBtn = document.querySelector(".color-grid");
const clearBtn = document.querySelector(".clear-grid");
let intGrid=0;
let gridItems;
clearBtn.addEventListener("click",() => updateColor("white"));

createNewGridBtn.addEventListener("click",() =>{
  let gridValue = prompt("Enter the new grid size");
  intGrid = parseInt(gridValue,10);
  console.log(intGrid);
  updateGrid(intGrid);
});

function updateGrid(gridVal=16){
  newGrid=gridVal;
  container.innerHTML="";
  console.log(newGrid);
  root.style.setProperty('--grid-size',newGrid);
  let totalItems = newGrid * newGrid;

    for (let i = 0; i < totalItems; i++) {
    let div = document.createElement("div");
    div.classList.add("grid-item");
    container.appendChild(div);
  }
  gridItems = document.querySelectorAll(".grid-item");

  addMouseListener();

} 


function addMouseListener() {
  gridItems.forEach(item => {
    item.addEventListener("mouseover", () => {
      item.style.backgroundColor = "red";
    });
  });
}

// Function to update the grid items' color
function updateColor(color = "") {
  gridItems.forEach(item => {
    if (color == "red") {
      item.addEventListener("mouseover", () => {
        item.style.backgroundColor = color;
      });
    } else {
      // Clear the color immediately
      item.style.backgroundColor = color;
    }
  });
}

updateGrid();








