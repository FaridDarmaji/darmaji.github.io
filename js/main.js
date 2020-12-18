const domBox = document.querySelectorAll(".box");
const domP1 = document.querySelector("#p1");
const domP2 = document.querySelector("#p2");
const domReset = document.querySelector(".btn-reset");
const domBoard = document.querySelector(".papan");
const domPlyMode = document.querySelector(".player-mode");
const domAiMode = document.querySelector(".ai-mode");

let content = "x";
let mode = "player";
const styleWin = "box-win";
const styleBlock = "block-click";
const row = [];
const setWin = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

main();
domPlyMode.addEventListener("click", () => {
  console.log("Multi Player Mode");
  domPlyMode.classList.add("active");
  domAiMode.classList.remove("active");

  reset();
  mode = "player";
  main();
});
domAiMode.addEventListener("click", () => {
  console.log("AI Mode");
  domAiMode.classList.add("active");
  domPlyMode.classList.remove("active");

  reset();
  mode = "ai";
  main();
});
domReset.addEventListener("click", () => {
  reset();
});

function main() {
  domBox.forEach((box, index) => {
    row.push(box);
  });

  row.forEach((box, index) => {
    box.addEventListener("click", (e) => {
      console.clear();
      mode === "player" ? inputPlayer(e) : inputAi(e);
    });
  });
}

function reset() {
  console.log("reset");
  row.forEach((box) => {
    box.textContent = "";
  });
  console.clear();
  content = "x";
  for (let i = 0; i < row.length; i++) {
    row[i].classList.remove(styleWin);
    domBoard.classList.remove(styleBlock);
  }
}

function demoAI() {
  let a = Math.floor(Math.random() * (3 - 0));
  let b = Math.floor(Math.random() * (6 - 3)) + 3;
  let c = Math.floor(Math.random() * (8 - 6)) + 6;
  console.log(a + "," + b + "," + c);
}

function setPlayer() {
  domP1.textContent = "";
  domP2.textContent = "";
  content === "x" ? (domP2.textContent = "play") : (domP1.textContent = "play");
}
