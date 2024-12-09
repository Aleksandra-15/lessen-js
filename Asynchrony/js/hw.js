//Завдання "Таймер інтервалу": Створіть програму, яка виводить повідомлення кожну секунду за допомогою setInterval. Після 5 повідомлень зупиніть виконання інтервалу за допомогою clearInterval.

let count = 0;
const intervalMessage = (message) => {
  count++;
  setInterval(() => {
    alert("Завітайте до нас!");
  }, 1000);
  if (message === 5) {
    clearInterval(intervalMessage);
  }
};

//Завдання "Анімація елементів": Створіть кілька елементів на сторінці і реалізуйте просту анімацію, змінюючи їх розмір, положення чи стилі через певний інтервал за допомогою setInterval.

const boxes = document.querySelectorAll(".animated-box");

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

boxes.forEach((box) => {
  box.style.top = `${getRandomInt(0, 350)}px`;
  box.style.left = `${getRandomInt(0, 550)}px`;
});

//Завдання "Інтерактивна гра": Створіть просту інтерактивну гру, де гравець має натискати на елементи на сторінці протягом певного інтервалу часу, використовуючи setInterval. Реалізуйте лічильник очок та відслідковуйте кількість натисків гравця.

const container = document.querySelector(".game-container");
const target = document.querySelector(".target");
const scoreboard = document.querySelector(".scoreboard");
const gameOverScreen = document.querySelector(".game-over");
const finalScore = document.getElementById("final-score");

let score = 0;
let timeLeft = 15; // Тривалість гри у секундах

function moveTarget() {
  const x = Math.floor(
    Math.random() * (container.clientWidth - target.clientWidth)
  );
  const y = Math.floor(
    Math.random() * (container.clientHeight - target.clientHeight)
  );
  target.style.left = `${x}px`;
  target.style.top = `${y}px`;
}

function updateScore() {
  score += 1;
  scoreboard.textContent = `Очки: ${score}`;
}

target.addEventListener("click", () => {
  updateScore();
  moveTarget();
});

function startGame() {
  moveTarget();

  const gameInterval = setInterval(() => {
    timeLeft -= 1;
    if (timeLeft <= 0) {
      clearInterval(gameInterval);
      endGame();
    }
  }, 1000);
}
function endGame() {
  target.style.display = "none";
  gameOverScreen.style.display = "block";
  finalScore.textContent = score;
}
startGame();

//Завдання "Контроль часу": Створіть програму, яка дозволяє користувачу встановити певний час (у секундах) за допомогою введення з клавіатури. Потім використовуйте setTimeout або setInterval, щоб після встановленого часу вивести повідомлення.

document.getElementById("start-timer").addEventListener("click", () => {
  const input = document.getElementById("time-input");
  const message = document.getElementById("message");

  // Очищення повідомлення
  message.textContent = "";

  // Отримання часу з введення
  const time = parseInt(input.value, 10);

  if (isNaN(time) || time <= 0) {
    message.textContent = "Будь ласка, введіть коректний час у секундах.";
    return;
  }

  message.textContent = `Таймер встановлено на ${time} секунд...`;

  // Запуск таймера
  setTimeout(() => {
    message.textContent = "Час вийшов! 🚀";
  }, time * 1000);
});
