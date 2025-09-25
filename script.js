// All buttons here
const container = document.querySelector("#container");
const resetBtn = document.querySelector("#resetBtn");
const normalBtn = document.querySelector("#normalBtn");
const rainbowBtn = document.querySelector("#rainbowBtn");
const shadeBtn = document.querySelector("#shadeBtn");
const eraseBtn = document.querySelector("#eraseBtn");
const colorPicker = document.querySelector("#colorPicker");

let currentMode = "normal"; // normal, rainbow, shade

// Function to create grid dynamically
function createGrid(size) {
  container.innerHTML = "";
  for (let i = 0; i < size * size; i++) {
    const div = document.createElement("div");
    div.classList.add("grid-square");
    div.dataset.hoverCount = 0; // for shading mode
    container.appendChild(div);
  }

  // Adjust square size dynamically
  const squares = document.querySelectorAll(".grid-square");
  squares.forEach((square) => {
    square.style.flex = `0 0 calc(100% / ${size})`;
  });

  addHoverEffect();
}

// Function to get random RGB color
function randomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
}

// Custom color
colorPicker.addEventListener("input", () => {
  currentMode = "custom";
});

// Function to add hover effect based on mode
function addHoverEffect() {
  const square = document.querySelectorAll(".grid-square");
  square.forEach((square) => {
    square.addEventListener("mouseover", () => {
      if (currentMode === "normal") {
        square.style.backgroundColor = "black";
      } else if (currentMode === "custom") {
        square.style.backgroundColor = colorPicker.value;
      } else if (currentMode === "rainbow") {
        square.style.backgroundColor = randomColor();
      } else if (currentMode === "shade") {
        let count = parseInt(square.dataset.hoverCount);
        if (count < 10) {
          count++;
          square.dataset.hoverCount = count;
          square.style.backgroundColor = `rgba(0,0,0,${count / 10})`;
        }
      }
    });
  });
}

// Reset button event
resetBtn.addEventListener("click", () => {
  let size = prompt("Enter grid size (max 100)");
  size = Math.min(size, 100);
  if (size && size > 0) createGrid(size);
});

// Erase the canvas without changing grid
eraseBtn.addEventListener("click", () => {
  const squares = document.querySelectorAll(".grid-square");
  squares.forEach((square) => {
    square.style.backgroundColor = "#f0f0f0"; // reset to default background
    square.dataset.hoverCount = 0; //reset shading count
  });
});

// Mode buttons
normalBtn.addEventListener("click", () => (currentMode = "normal"));
rainbowBtn.addEventListener("click", () => (currentMode = "rainbow"));
shadeBtn.addEventListener("click", () => (currentMode = "shade"));

// Initial default grid
createGrid(16);
