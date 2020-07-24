// VARIABLES
const p1Button = document.querySelector("#p1");
const p2Button = document.querySelector("#p2");
const p1Display = document.querySelector("#score1");
const p2Display = document.querySelector("#score2");
const reset = document.querySelector("#reset");
const numInput = document.querySelector("input");
const playLimit = document.querySelector("p span");
let winningScore = 5;
let gameOver = false;

// END VARIABLES

// SCORE ADD INS
let p1Score = 0;
let p2Score = 0;
// END SCORE ADD INS

// CLICK TO ADD P1 SCORE
p1Button.addEventListener("click", () => {
  if (!gameOver) {
    p1Score++;
    if (p1Score === winningScore) {
      p1Display.classList.add("winner");
      gameOver = true;
    }
    p1Display.textContent = p1Score;
  }
});
// END CLICK TO ADD P1 SCORE

// CLICK TO ADD P2 SCORE
p2Button.addEventListener("click", () => {
  if (!gameOver) {
    p2Score++;
    if (p2Score === winningScore) {
      p2Display.classList.add("winner");
      gameOver = true;
    }
    p2Display.textContent = p2Score;
  }
});
// END CLICK TO ADD P2 SCORE

// CLICK TO RESET
reset.addEventListener("click", () => {
  resetgame();
});
// END CLICK TO RESET

function resetgame() {
  p1Score = 0;
  p2Score = 0;
  p1Display.textContent = 0;
  p2Display.textContent = 0;
  p1Display.classList.remove("winner");
  p2Display.classList.remove("winner");
  gameOver = false;
}

numInput.addEventListener("change", () => {
  playLimit.textContent = numInput.value;
  winningScore = Number(numInput.value);
  resetgame();
});
