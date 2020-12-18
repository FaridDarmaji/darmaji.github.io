let tmp = [];
let tmpSelect = [];
let score;

function inputAi(e) {
  if (e.currentTarget.innerHTML === "") {
    e.currentTarget.innerHTML = content;
    // console.log(e.currentTarget.innerHTML);
    selectionScore("x");
    content = content === "x" ? "o" : "x";
  }
}

function selectionScore(txt) {
  tmpSelect = [];
  setWin.forEach((arr, index) => {
    tmp = [];
    for (let i = 0; i < arr.length; i++) {
      // console.log("Isi index " + arr[i] + ": " + row[arr[i]].innerHTML);
      tmp.push(row[arr[i]].innerHTML);
    }
    for (let a = 0; a < tmp.length; a++) {
      // console.log(tmp[a]);
      if (tmp[a] === txt) {
        score++;
        console.log(score);
      }
    }
    tmpSelect.push([index, score]);
    console.log(tmp);
    score = 0;
  });
  console.log(tmpSelect);
}

function demoAI() {
  let a = Math.floor(Math.random() * (3 - 0));
  let b = Math.floor(Math.random() * (6 - 3)) + 3;
  let c = Math.floor(Math.random() * (8 - 6)) + 6;
  console.log(a + "," + b + "," + c);
}
