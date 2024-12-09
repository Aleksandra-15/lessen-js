//!Date

const date = new Date();
console.log(date); //2024-10-16T16:17:24.941Z
// Різниця в часі виникає через те, що час тут показується в стандарті UTC (Universal Time Coordinated), який зазвичай використовується для узгодження часу в різних часових зонах. UTC не враховує часові пояси та переходи на літній або зимовий час, тому може відрізнятися від місцевого часу на кілька годин.

// Зараз у більшості країн Європи діє літній час (CEST), який випереджає UTC на 2 години. Тому, коли тут показує 11:58 (UTC), ваш локальний час — 14:58 (UTC+2).

//!ВЛасна дата

const date2 = new Date("2021-05-11");
console.log(date2);

//*встановити разом з часом
const date3 = new Date(2021, 5, 11, 12, 20, 10);
console.log(date3);

//!Unix time
const dateUnix = new Date(10000000);
console.log(dateUnix);

console.log(Date.now());

//! Створення дати з рядка
//?Метод Date.parse(str) читає дату з рядка у форматі YYYY-MM-DDTHH:mm:ss.sssZ

const dateMs = Date.parse("2021-01-26T13:52:50.417+00:00");
console.log(dateMs);

//!Форматування дати

const options = {
  year: "numeric",
  month: "short",
  day: "numeric",
};
console.log(date.toLocaleString("uk-UA", options));

//!Вимірювання часу

let startDate = Date.now();
for (let i = 0; i < 1000000; i++) {
  let doSomthing = i * i + i + 1;
}
let endDate = Date.now();
console.log(`цикл виконався ${endDate - startDate}мілісекунд`);

//!методи класу DAte
//?гетери
console.log(date.getFullYear());
console.log(date.getMonth());
console.log(date.getDay());
console.log(date.getHours());

//? сетери
date.setFullYear(2025);
date.setMonth(10);
date.setDate(17);
date.setHours(20);

console.log(date);

//? getTime() -те саме що Date().now
console.log(new Date().getTime());

//? Створення відліку часу


const targetDate2 = new Date("January 1, 2025 00:00:00").getTime();
console.log(targetDate2);

const timerElent = document.getElementById("timer");

const countdownTimer = setInterval(() => {
  const nowDate = new Date().getTime();
//різниця в мілісекундах
  const timeRemaining = targetDate2 - nowDate;

  const seconds = Math.floor((timeRemaining / 1000) % 60);
  const minutes = Math.floor((timeRemaining / 1000 / 60) % 60);
  const hours = Math.floor((timeRemaining / 1000 / 60 / 60) % 24);
  const days = Math.floor(timeRemaining / 1000 / 60 / 60 / 24);

  timerElent.textContent = `${days} days ${hours} hours ${minutes}  minutes ${seconds}`;

  if (timeRemaining < 0) {
    clearInterval(countdownTimer);
  timerElent.textContent = "Time is up";}}, 1000);


const example = () => {
  const targetDate2 = new Date("January 1, 2025 00:00:00").getTime();
  const nowDate = new Date().getTime();
  const timeRemaining = (targetDate2 = nowDate);
  const seconds = Math.floor((timeRemaining / 1000) % 60);
  const minutes = Math.floor((timeRemaining / 1000 / 60) % 60);
};
