//!Секундомір з точністю до мілісекунд з можливістю запуску, призупинки та скидання

const timerDisplay = document.getElementById("timeDisplay");
const startTimerBtn = document.getElementById("startbtn");
const stopTimerBtn = document.getElementById("stopbtn");
const resetTimerButton = document.getElementById("resetbtn");

let elapsedTime = 0; //*загальний час у мілсікундах
let timerDisplayInterval;
const formatTime = (time) => {
  //time - час у мілісекундах
  const hours = Math.floor(time / 3600000);
  const minuts = Math.floor(time / 60000);
  const seconds = Math.floor(time / 1000);
  const millisecond = time % 1000;
  return ` ${hours.toString().padStart(2, "0")}:${minuts
    .toString()
    .padStart(2, "0")}: ${seconds.toString().padStart(2, "0")}: ${millisecond
    .toString()
    .padStart(2, "0")}:`;
};

const startTimer = () => {
  if (!timerDisplayInterval) {
    timerDisplayInterval = setInterval(() => {
      elapsedTime += 100;
      timerDisplay.textContent = formatTime(elapsedTime);
    }, 100);
  }
};

const stopTimer = () => {
  clearInterval(timerDisplayInterval);
  timerDisplayInterval = null;
};
startTimerBtn.addEventListener("click", startTimer);
stopTimerBtn.addEventListener("click", stopTimer);

const resetTimer = () => {
  stopTimer();
  elapsedTime = 0;
  formatTime(elapsedTime);
  timerDisplay.textContent = "00:00:00:000";
};
resetTimerButton.addEventListener("click", resetTimer);

//* Таймер, який починає відлік з 5 хвилин та зменшує час кожну секунду

const timeTask = document.getElementById("timeTask");
const starttaskbtn = document.getElementById("starttaskbtn");
let totalTime = 1 * 60;
let timerIdInterval;

const renderTime = () => {
  console.log(1);

  timerIdInterval = setInterval(() => {
    let minuts = Math.floor(totalTime / 60);
    let seconds = totalTime % 60;
    timeTask.textContent = `${minuts.toString().padStart(2, "0")}: ${seconds
      .toString()
      .padStart(2, "0")}`;
    totalTime--;
    if (totalTime < 0) {
      clearInterval(timerIdInterval);
    }
  }, 1000);
};
starttaskbtn.addEventListener("click", renderTime);
