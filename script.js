"use strict";

const container = document.querySelector(".container");

for (let i = 1; i <= 256; i++) {
  const cell = document.createElement("div");
  cell.className = "cell";
  container.appendChild(cell);
}
