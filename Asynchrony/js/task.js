//Завдання "Лічильник": Створіть лічильник, який збільшується на одиницю кожну секунду. Виводьте значення лічильника на сторінці.
let counter = 0;

/* const counterHtml = document.querySelector = 
let timer = () => {
    for()
};
 */

//Завдання "Зміна кольору": Створіть блок, який змінює свій фоновий колір кожні 3 секунди. Використовуйте setInterval для зміни кольору

const box = document.querySelector(".box");

const colorArr = ["#jif39", "#989jjfe", "#89732"];

setInterval(() => {
  let randNum = colorArr[Math.floor(Math.random() * colorArr.length)];
  console.log(randNum);
  box.style.bacgroundColor = randNum;
}, 3000);

//У наведеному нижче коді заплановано виклик setTimeout, потім виконується важкий розрахунок, на виконання якого потрібно більше 100 мс.
//Коли запуститься запланована функція?
//Після циклу+.
//До циклу.
//На початку циклу.
//Що буде показувати alert?

let num = 0;
/* alert( `alert перед циклом ${num}`)
setTimeout(() => alert(num), 100); */
// припустимо, що час виконання цієї функції > 100 мс
for (let i = 0; i < 100000000; i += 1) {
  num += 1;
}

//Завдання "Зміна тексту": Створіть текст, який циклічно змінюється між кількома заданими значеннями. Використовуйте setInterval для зміни тексту кожні 2 секунди.
const text = document.querySelector("#text");

const randomText = ["Caша", "Юля", "Назар", "Катя"];

setInterval(() => {
  let randText = randomText[Math.floor(Math.random() * randomText.length)];
  console.log(randText);
  text.textContent = randText;
}, 2000);

//Завдання "Затримка повідомлення": Створіть функцію, яка приймає текстове повідомлення та затримує його виведення на сторінку на певний час, використовуючи setTimeout

const dalayWessage = (message) => {
  setTimeout(() => {
    alert(message);
  }, 2000);
};

dalayWessage("bobick");

//Напишіть функцію printNumbers(from, to) яка виводить число кожну секунду, починаючи від from і закінчуючи to.
//Зробіть два варіанти рішення.
//Використовуючи setInterval.

const numArray = (from, to) => {
  let curent = from;
  let timer = setInterval(() => {
    console.log(curent);

    if (curent === to) {
      clearInterval(timer);
    } else {
      curent++;
    }
  }, 2000);
};
numArray(0, 5);

//Використовуючи вкладений setTimeout.

const printNumbers2 = (from, to) => {
  let current = from;
  const next = () => {
    console.log(current);

    if (current < to) {
      //рекурсія
      current++;
      setTimeout(next, 1000);
    }
  };
  setTimeout(next, 1000);
};
printNumbers2(0, 5);

//Завдання "Зміна стилів": Створіть блок, який змінює свої стилі (наприклад, фоновий колір, розмір шрифту) через певний час. Використовуйте setTimeout для зміни стилів блоку.

const block = document.querySelector(".block");

setTimeout(() => {
  block.style.color = "red";
}, 2000);

//Завдання "Зміна розміру": Створіть блок, який змінює свій розмір кожні 4 секунди. Використовуйте setInterval для зміни ширини та висоти блоку.

let height = 100;
setInterval(() => {
  height += 50;
  block.style.height = height + "px";
});
