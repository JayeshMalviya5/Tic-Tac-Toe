console.log("Welcome to Game");
var gameSound = new Audio("GameSound.mp3");
let chance = new Audio("Ting.mp3");
let gameOver = new Audio("GameOver.mp3");
let turn = "X";
let isgameover = false;
gameSound.play();

const ChangeTurn = () => {
  if (turn == "X") {
    return 0;
  } else {
    return "X";
  }
};

// Function to check win
function CheckWin(){
  let boxTexts = document.getElementsByClassName("boxText");
  let wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  wins.forEach((e) => {
    if (
      boxTexts[e[0]].innerText === boxTexts[e[1]].innerText &&
      boxTexts[e[2]].innerText === boxTexts[e[1]].innerText &&
      boxTexts[e[0]].innerText !== ""
    ) {
      document.querySelector(".info").innerText =
        boxTexts[e[0]].innerText + " won";
      isgameover = true;
      gameOver.play();
      document
        .querySelector(".imgbox")
        .getElementsByTagName("img")[0].style.width = "200px";
    }
  });
};

// Game logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((element) => {
  let boxText = element.querySelector(".boxText");
  element.addEventListener("click", (e) => {
    if (boxText.innerText === "") {
      boxText.innerText = turn;
      turn = ChangeTurn();
      chance.play();
      CheckWin();
      if (!isgameover) {
        document.getElementsByClassName("info")[0].innerText =
          "turn for " + turn;
      }
    }
  });
});

// reset button code
reset = document.getElementById("reset");
reset.addEventListener("click", (element) => {
  let boxText = document.querySelectorAll(".boxText");
  Array.from(boxText).forEach((element) => {
    element.innerText = "";
  });
  turn = "X";
  isgameover = false;
  document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width =
    "0px";
});
