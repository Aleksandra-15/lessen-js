/* 2. Додаткові завдання
1. Створити функцію, яка повертає поточну дату та час.
2. Створити функцію, яка приймає дату та повертає рік.
3. Створити функцію, яка приймає дату та повертає місяць.
4. Створити функцію, яка приймає дату та повертає день місяця.

5. Створити функцію, яка приймає дату та повертає години.
6. Створити функцію, яка приймає дату та повертає хвилини.
7. Створити функцію, яка приймає дату та повертає секунди.

 8. Створити функцію, яка перевіряє чи є дата вихідним днем (субота або неділя).
9. Створити функцію, яка порівнює дві дати та повертає різницю в днях.
10. Створити функцію, яка приймає дату та кількість днів, та повертає нову дату після додавання цієї кількості днів. */

const dateTime = new Date();
console.log(dateTime);

const gettingYear = (date) => {
  return date.getFullYear();
};
console.log(gettingYear(new Date("2014-01-02")));

const gettingMonth = (date) => {
  return date.getMonth();
};
console.log(gettingMonth(new Date("2014-01-02")));

const gettingDays = (date) => {
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return `month-${month}, day-${day}`;
};
console.log(gettingDays(new Date("2014-01-02")));

const hourOfDate = (date) => {
  return date.getHours();
};
console.log(hourOfDate(new Date()));

const dateOfMinuts = (mins) => {
  return mins.getMinutes();
};
console.log(dateOfMinuts(new Date()));

const dateOfSecond = (secs) => {
  return secs.getSeconds();
};
console.log(dateOfSecond(new Date()));

const displayDay = (date) => {
  if (date.getDate() == 6 || date.getDate() == 7) {
    return "this is a weekend day";
  } else {
    return "this is a workday";
  }
};
console.log(displayDay(new Date("2021-06-09")));
console.log(displayDay(new Date("2021-06-14")));

const compareDates = (date1, date2) => {
  const nowDate = date1.getTime();
  const secondDate = date2.getTime();
  const timeLeft = secondDate - nowDate;
  const days = Math.floor(timeLeft / 1000 / 60 / 60 / 24);
  return `${days} days `;
};
console.log(compareDates(new Date("2023-08-06"), new Date("2024-12-31")));
