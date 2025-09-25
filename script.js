// Dynamic grid creation
const container = document.querySelector("#container");

for (let i = 1; i < 257; i++) {
  const div = document.createElement("div");
  div.classList.add("grid-square");
  container.appendChild(div);
  // console.log(div);
}

const gridSquare = document.querySelector(".grid-square");

gridSquare.addEventListener("mouseover", () => {
  gridSquare.style.backgroundColor = "red";
});
