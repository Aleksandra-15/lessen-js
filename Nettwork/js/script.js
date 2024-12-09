//!AJAX (Asynchronous JavaScript and XML) — це підхід, який дозволяє обмінюватися даними між клієнтом і сервером без перезавантаження сторінки. Основна мета AJAX — зробити взаємодію з веб-додатками швидшою та зручнішою для користувача.

// Як fetch пов'язаний із AJAX?
// Раніше для виконання AJAX-запитів використовувався метод XMLHttpRequest. Але зараз fetch став сучасною, спрощеною і популярною альтернативою.

// fetch дозволяє:

// Надсилати HTTP-запити на сервер.
// Отримувати відповіді у форматах JSON, текст, Blob тощо.
// Працювати асинхронно за допомогою Promise.

fetch("https://jsonplaceholder.typicode.com/posts")
  // .then(response => response.json()) //? парсить дані в JSON-форматі.

  // .then(response => response.text()) //? парсить дані в простому текстовому форматі, наприклад .csv (табличні дані).

  .then((response) => response.blob()) //? парсить дані, що описують файл, наприклад, зображення, аудіо або відео.

  .then((data) => console.log(data))
  .catch((err) => console.log("Щось пішло не так", err));

//?Помилка новачка
let globalVariable;

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json()) //? парсить дані в JSON-форматі.

  .then((data) => {
    console.log("user inside then block", data);

    globalVariable = data;

    // console.log('globalVariable inside then block', globalVariable);
  })
  .catch((err) => console.log("Щось пішло не так", err));

console.log("globalVariable outside then block", globalVariable); // undefined

//? вирішення помилки
const processData = (data) => {
  console.log("callback function", data);
};
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((user) => processData(user));

//? Параметри рядка запиту

const url = `https://jsonplaceholder.typicode.com/users?${searchParams.toString()}`;
const listUser = document.querySelector(".list");

//? Клас URLSearchParams дозволяє створювати об'єкти, які представляють параметри рядка запиту URL.

const searchParams = new URLSearchParams({
  _limit: 10,
  _sort: "username",
});
console.log(searchParams.toString());

fetch(url)
  .then((response) => response.json())
  .then((users) =>
    users.forEach((value) => {
      const item = document.createElement("li");
      item.innerHTML = `Name: ${value.name}, email: ${value.email}`;
      item.id = value.id;
      listUser.appendChild(item);
    })
  );

//?HTTP-Заголовки
const headers = new Headers({
  "Content-Type": "application/json",
  Accept: "application/json",
  Authorization: "Bearer 123456789",
});

console.log(headers);

//Headers{ "Content-Type": "application/json",
// Accept: "application/json",
//Authorization: "Bearer 123456789",}
fetch("https://jsonplaceholder.typicode.com/users", { headers })
  .then((response) => response.json())

  .then((user) => processData(user))
  .catch((err) => console.log("Щос пішло не так", err));
