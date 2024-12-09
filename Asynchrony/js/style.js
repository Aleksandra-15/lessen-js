//синхронний код

//?Синхронний код виконується по порядку, тобто одна операція за іншою. Наступна операція починається тільки після того, як завершилася попередня.

console.log("перше повідомлення");
console.log("друге повідомлення");
console.log("третє повідомлення");

//асинхронний код

//?Асинхронний код дозволяє виконувати операції незалежно від основного потоку коду. Наприклад, ми можемо завантажити дані з сервера і продовжити виконання інших операцій, не чекаючи завершення завантаження.

console.log("перше повідомлення");
setTimeout(() => {
  console.log("друге повідомлення");
}, 2000);
console.log("третє повідомлення");

//!Таймер

//?setTimeout()- дозволяє нам запускати функцію один раз через певний інтервал часу.

const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  setTimeout(() => {
    alert("hell everybody");
  }, 5000);
});

//?SetInterval -дозволяє нам запускати функцію багаторазово, починаючи через певний інтервал часу, а потім постійно повторюючи у цьому інтервалі.

const startBtn = document.querySelector(".js-start");
const stopBtn = document.querySelector(".js-stop");
let timerId = null;
startBtn.addEventListener("click", () => {
  timerId = setInterval(() => {
    console.log("Nice");
  }, 1000);
});
stopBtn.addEventListener("click", () => {
  clearInterval(timerId);
  console.log("clear interval");
});
