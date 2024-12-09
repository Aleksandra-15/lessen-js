//*task1
//Створити елементи для відображення повідомлення про стан гри та поточної клавіші, яку потрібно натиснути.
//Створити масив keys, що містить десять можливих клавіш, які можуть бути натиснуті.
//Створити змінну currentKeyIndex, що зберігає індекс поточної клавіші, яку потрібно натиснути.
//Встановити текст елементу з id="key" на поточну клавішу, яку потрібно натиснути.
//Створити обробник події keydown, що перевіряє, чи була натиснута правильна клавіша. Якщо була натиснута правильна клавіша, то збільшити currentKeyIndex на 1, встановити нову поточну клавішу та оновити текст елементу з id="key". Вивести повідомлення про помилку використовуючи бібліотеку pnotifyю

import { info, error, success } from "@pnotify/core";
import "@pnotify/core/dist/PNotify.css";
import "@pnotify/core/dist/BrightTheme.css";



const messageBtn = document.querySelector(".message");
const keys = ["a", "w", "d", "s", "z", "f", "g", "e", "r", "t"];
let currentKeyIndex;
const keyElement = document.querySelector("#key");

const setNewKey = () => {
  currentKeyIndex = Math.round(Math.random() * keys.length);
  keyElement.textContent = keys[currentKeyIndex];
};
const hendlKeyDown = (event) => {
  const pressedKey = event.key.toLowerCase()
    ;
  console.log(pressedKey);
  if (pressedKey === keys[currentKeyIndex]) {
    currentKeyIndex++;
    setNewKey();
    success("Правильна клавіша");
  } else {


    error("Неправильна клавіша");
  }
};
//?встановити нову поточну клавішу та оновити текст елементу з id="key". Вивести повідомлення про помилку використовуючи бібліотеку pnotifyю
//Якщо була натиснута неправильна клавіша, то повідомити користувача про помилку, використовуючи бібліотеку pnotify
//Створити обробник події keypress, що запобігає дії за замовчуванням для уникнення несподіваного поведінки сторінки під час гри.
//Додати кнопку "Нова гра", що оновлює гру з новим поточним ключем та повідомленням, використовуючи бібліотеку pnotify
document.querySelector('.message').addEventListener('click', setNewKey)

document.addEventListener("keydown", (event) => {
  event.preventDefault();
  console.log("Keydown", event);
  hendlKeyDown(event)
});

/* element.addEventListener("click", function () {}); */

// //*task 2
// //☝️ Потрібно створити графік типу "line" за допомогою Chart.js. Для відображення даних використати об'єкт chartData, який містить масив міток для осі X та масив даних для осі Y. Також задається колір графіка та його ширина.

// //☝️ Для створення графіка використати конструктор Chart, який отримує два аргументи: елемент canvas, до якого буде додано графік, та об'єкт конфігурації, який містить дані для відображення та налаштування графіка.
// const chartData = {
//   labels: [
//     "1",
//     "2",
//     "3",
//     "4",
//     "5",
//     "6",
//     "7",
//     "8",
//     "9",
//     "10",
//     "11",
//     "12",
//     "13",
//     "14",
//     "15",
//     "16",
//     "17",
//     "18",
//     "19",
//     "20",
//     "21",
//     "22",
//     "23",
//     "24",
//     "25",
//     "26",
//     "27",
//     "28",
//     "29",
//     "30",
//   ],
//   datasets: [
//     {
//       label: "Продажі за останній місяць",
//       data: [
//         150, 220, 180, 200, 250, 300, 280, 350, 400, 380, 420, 450, 500, 550,
//         600, 650, 700, 750, 800, 850, 900, 950, 1000, 1050, 1100, 1150, 1200,
//         1250, 1300, 1350,
//       ],
//       backgroundColor: "#2196f3",
//       borderColor: "#2196f3",
//       borderWidth: 1,
//     },
//   ],
// };
// const salesChart = new Chart();

