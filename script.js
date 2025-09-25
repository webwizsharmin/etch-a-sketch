// All buttons here
const container = document.querySelector("#container");
const resetBtn = document.querySelector("#resetBtn");
const normalBtn = document.querySelector("#normalBtn");
const rainbowBtn = document.querySelector("#rainbowBtn");
const shadeBtn = document.querySelector("#shadeBtn");
const eraseBtn = document.querySelector("#eraseBtn");

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
}

// Initial default grid
createGrid(16);
