//Завдання: "Створюємо список улюблених книг"
//Твоє завдання — створити веб-додаток, який дозволяє працювати зі списком улюблених книг.
//У додатку має бути реалізовано:
//1. Create: Додавання нової книги до списку.
//2. Read: Відображення списку всіх книг із сервера.
//3. Update: Зміна назви книги в списку.
//4. Delete: Видалення книги зі списку.

//HTML і CSS:
//* Створи просту сторінку з полем для введення назви //книги, кнопкою "Додати книгу", і таблицею для відображення списку.
//Функціонал:
//Коли користувач вводить назву книги та натискає "Додати книгу", виконується POST-запит на сервер для додавання книги.
//GET-запит виконується автоматично при завантаженні сторінки, щоб отримати всі книги.
//Для кожної книги у списку має бути кнопка "Редагувати", яка дозволяє змінити назву книги (PATCH-запит).
//Додай кнопку "Видалити", щоб видаляти книги із сервера (DELETE-запит).
//Бекенд (симуляція): створити локальний сервер за допомогою json-server.

const URL = "http://localhost:3000/books";

const bookBtn = document.querySelector("#bookBtn");
const bookInput = document.querySelector("#bookTitle");
const bookList = document.querySelector("#bokList");

fetch(URL)
  .then((res) => res.json())
  .then((books) => booksRender(books))
  .catch((err) => console.log(err));

const booksRender = (books) => {
  bookList.innerHTML = books
    .map((book) => {
      return ` <li data-id="${book.id}">${book.title}</li>`;
    })
    .join("");
};

const createBook = () => {
  const book = {
    title: bookTitle.value,
  };
  const headers = {
    method: "POST",
    body: JSON.stringify(postToAdd),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  };
  fetch(URL, headers)
    .then((res) => res.json())
    .then((books) => booksRender(books))
    .catch((err) => console.log(err));
};

addBook.addEventListener("submit", () => {});
