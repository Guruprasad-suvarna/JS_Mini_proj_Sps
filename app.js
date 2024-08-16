let btns = document.querySelectorAll(".images");
let stone = document.getElementById("Stone");
let paper = document.getElementById("Paper");
let scizzor = document.getElementById("Scizzor");
let u = document.querySelector("#score-u");
let c = document.querySelector("#score-comp");
let msg = document.querySelector("#msg-para");
let box = document.querySelector(".box");

let reset = document.querySelector("#reset");

const buttons = [
  { id: "Stone", value: "Stone" },
  { id: "Paper", value: "Paper" },
  { id: "Scizzor", value: "Scizzor" },
];

buttons.forEach((button) => {
  document.getElementById(button.id).addEventListener("click", function () {
    user = button.value;
    // console.log(Result);
    computer();
    final();
  });
});
let ucount = 0;
let compcount = 0;

const showWinner = (userWin) => {
  if (userWin === true) {
    // console.log("U won");
    msg.innerText = `You won your ${user} beats ${comp} `;
    msg.style.backgroundColor = "green";
    ucount = ucount + 1;
    u.innerText = ucount;
  } else {
    // console.log("comp won");
    msg.innerText = `Computer Won ${comp} beats  your ${user}`;
    msg.style.backgroundColor = "red";
    compcount = compcount + 1;
    c.innerText = compcount;
  }
};

const gameReset = () => {
  ucount = 0;
  compcount = 0;
  u.innerText = ucount;
  c.innerText = compcount;
  // console.log(ucount);
  msg.innerText = "Play Your Turn";
  msg.style.backgroundColor = "black";
};

const options = ["Stone", "Paper", "Scizzor"];
const computer = () => {
  let compres = Math.floor(Math.random() * 3);
  // console.log(options[compres]);
  comp = options[compres];
};

const final = () => {
  // console.log("user", user);
  // console.log("comp", comp);
  if (user === comp) {
    // console.log("It's a draw");
    msg.innerText = "It's a Draw!! Play again";
    msg.style.backgroundColor = "black";
  } else {
    let userWin = true;

    if (user === "Stone") {
      userWin = comp === "Paper" ? false : true;
    } else if (user === "Paper") {
      userWin = comp === "Scizzor" ? false : true;
    } else {
      userWin = comp === "Stone" ? false : true;
    }
    showWinner(userWin);
  }
};

reset.addEventListener("click", gameReset);
