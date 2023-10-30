"use strict";

const container = document.querySelector(".container");

for (let i = 1; i <= 256; i++) {
  const cell = document.createElement("div");
  cell.className = "cell";
  container.appendChild(cell);
}

const colorCell = document.querySelectorAll(".cell");

function changeColorOnHover(e) {
  e.target.style.backgroundColor = "#000000";
}
colorCell.forEach((cell) => {
  cell.addEventListener("mouseover", changeColorOnHover);
});
