const greet = (name, greeting = "Hi") => {
  console.log(`${greeting}, ${name}!`);
};
setInterval(greet, 200, " jonh", "ПРивіт");

//! Секундомір
const startSec = document.querySelector(".start");
const stopSec = document.querySelector(".stop");
const output = document.querySelector("#seconds");

let seconds = 0;
let timerId;

startSec.addEventListener("click", () => {
  startSec.disanke = true;
  timerId = setInterval(() => {
    seconds++;
    console.log(seconds);
    output.textContent = seconds;
  }, 1000);
});
stopSec.addEventListener("click", () => {
  seconds = 0;
  output.textContent = seconds;
  startSec.disanke = false;
  clearInterval(timerId);
});

//!таймер зворотнього відліку

let second2 = 10;
const timerid2 = setTimeout(() => {
  console.log("Time is our");
}, second2 * 1000);

//*Практика зворотного відліку
const inputId = document.querySelector("#numberId");
const btnId = document.querySelector(".btnid");
const getNamber = document.querySelector(".getNamber");

const startTimer = () => {
  let time = +inputId.value;
  const counter = setInterval(() => {
    time--;
    getNamber.textContent = time;
    if (time === 0) {
      getNamber.textContent = "";
    }
  }, 1000);
};
btnId.addEventListener("click", startTimer);
