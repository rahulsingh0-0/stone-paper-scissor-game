"use-strict";

const rockDiv = document.querySelector(".rock");
const paperDiv = document.querySelector(".paper");
const scissorkDiv = document.querySelector(".scissor");
let computerRE = document.querySelector(".computer");
let userrRE = document.querySelector(".user");
let result = document.querySelector("h2");
let computerScore = document.querySelector(".computer-score");
let UserScore = document.querySelector(".your-score");

let score1 = 0;
let score2 = 0;
result.style.opacity = 0;
rockDiv.addEventListener("click", function () {
  let randomNumber = Math.trunc(Math.random() * 3) + 1;
  if (randomNumber === 1) {
    computerRE.textContent = `computer choose: Rock`;
    result.textContent = "IT'S DRAW";
    result.style.backgroundColor = "#bdc3c7";
    result.style.color = "#2c3e50";
    result.style.opacity = 1;
  }
  if (randomNumber === 2) {
    computerRE.textContent = `computer choose: Paper`;
    result.textContent = "YOU LOST";
    result.style.backgroundColor = "#e74c3c";
    result.style.color = "red";
    result.style.opacity = 1;
    computerScore.textContent = `Computer:${score2++}`;
  }
  if (randomNumber === 3) {
    computerRE.textContent = `computer choose: scissor`;
    result.textContent = "YOU WIN";
    result.style.opacity = 1;
    result.style.backgroundColor = "#8ae289";
    result.style.color = "#1bec09";
    UserScore.textContent = `You:${score1++}`;
  }
  userrRE.textContent = `You choose :Rock`;
});
paperDiv.addEventListener("click", function () {
  let randomNumber = Math.trunc(Math.random() * 3) + 1;
  if (randomNumber === 1) {
    computerRE.textContent = `computer choose: Rock`;
    result.textContent = "YOU WIN";
    result.style.opacity = 1;
    result.style.backgroundColor = "#8ae289";
    result.style.color = "#1bec09";
    UserScore.textContent = `You:${score1++}`;
  }
  if (randomNumber === 2) {
    computerRE.textContent = `computer choose: Paper`;
    result.textContent = "IT'S DRAW";
    result.style.backgroundColor = "#bdc3c7";
    result.style.color = "#2c3e50";
    result.style.opacity = 1;
  }
  if (randomNumber === 3) {
    computerRE.textContent = `computer choose: scissor`;
    result.textContent = "YOU LOST";
    result.style.backgroundColor = "#e74c3c";
    result.style.color = "red";
    result.style.opacity = 1;
    computerScore.textContent = `Computer:${score2++}`;
  }

  userrRE.textContent = `You choose :Paper`;
});
scissorkDiv.addEventListener("click", function () {
  let randomNumber = Math.trunc(Math.random() * 3) + 1;
  if (randomNumber === 1) {
    computerRE.textContent = `computer choose: Rock`;
    result.textContent = "YOU LOST";
    result.style.backgroundColor = "#e74c3c";
    result.style.color = "red";
    result.style.opacity = 1;
    computerScore.textContent = `Computer:${score2++}`;
  }
  if (randomNumber === 2) {
    computerRE.textContent = `computer choose: Paper`;
    result.textContent = "YOU WIN";
    result.style.opacity = 1;
    result.style.backgroundColor = "#8ae289";
    result.style.color = "#1bec09";
    UserScore.textContent = `You:${score1++}`;
  }
  if (randomNumber === 3) {
    computerRE.textContent = `computer choose: scissor`;
    result.textContent = "IT'S DRAW";
    result.style.backgroundColor = "#bdc3c7";
    result.style.color = "#2c3e50";
    result.style.opacity = 1;
  }

  userrRE.textContent = `You choose :Scissor`;
});
