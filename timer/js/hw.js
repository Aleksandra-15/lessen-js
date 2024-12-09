//1. Створити таймер, який буде починати відлік з 1 години та зменшувати час кожну хвилину. При досягненні 30 хвилин, таймер повинен відправляти повідомлення екран про те, що залишилось менше половини часу.
const setTimer = document.querySelector("#timer");
const startSec = document.querySelector("#startBtn");
const stopSec = document.querySelector("#stopBtn");

let hour = 3600;

const counters = setInterval(() => {
  hour--;
  const second = hour % 60;
  const minuts = Math.floor(hour / 60);
  setTimer.textContent = `${minuts}: ${second} `;
  console.log("Time is our");
  if (hour === 1800) {
    alert("Залишилось мало часу");
  }
}, 1000);

//2.Створити таймер, який буде починати відлік з 30 секунд та зменшувати час кожну мілісекунду. При досягненні 10 секунд, таймер повинен відтворювати якусь анімацію, а при досягненні 0 секунд — виконувати певну дію, наприклад, робити кнопку почати знову активною.

const timout = document.querySelector("#timout");
const goSecond = document.querySelector("#goBtn");

let second = 30;
const begin = setInterval(() => {
  console.log("Time is our");
  second--;
  timout.textContent = second;
  if (second < 10) {
    const box = document.getElementById("box");
    let pos = 0;

    function moveBox() {
      if (pos < 300) {
        pos++;
        box.style.left = pos + "px";
        box.style.top = pos + "px";
        requestAnimationFrame(moveBox);
      }
    }
    if (second === 0) {
      clearInterval(begin);
    }

    moveBox();
  }
}, 1000);
