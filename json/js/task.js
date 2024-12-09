/* 
1. Дослідити бібліотеку Handlebars та її основні функції.
2. Ознайомитись з Parcel та parcel-plugin-handlebars-precompile.
3. Створити просту HTML-сторінку з використанням Handlebars шаблону.
4. Використовуючи Parcel та parcel-plugin-handlebars-precompile, скомпілювати сторінку і перевірити її роботу.
5. Розробити власний Handlebars шаблон для виведення списку елементів.
6. Застосувати створений шаблон до створення списку елементів на HTML-сторінці.
7. Скомпілювати сторінку та перевірити її роботу.
8. Розробити форму для додавання нових елементів до списку.
9. Використовуючи Handlebars, створити шаблон для виведення доданих елементів на сторінці.
10. Скомпілювати сторінку та перевірити її роботу з новими елементами.
 */
/* const colors = [
  { hex: "#f44336", rgb: "244,67,54" },
  { hex: "#e91e63", rgb: "233,30,99" },
  { hex: "#9c27b0", rgb: "156,39,176" },
  { hex: "#673ab7", rgb: "103,58,183" },
  { hex: "#3f51b5", rgb: "63,81,181" },
  { hex: "#2196f3", rgb: "33,150,243" },
  { hex: "#00bcd4", rgb: "0,188,212" },
  { hex: "#009688", rgb: "0,150,136" },
  { hex: "#4caf50", rgb: "76,175,80" },
  { hex: "#ffeb3b", rgb: "255,235,59" },
  { hex: "#ff9800", rgb: "255,152,0" },
  { hex: "#795548", rgb: "121,85,72" },
  { hex: "#607d8b", rgb: "96,125,139" },
];

const palette = document.querySelector(".js-palette");

const markupCard = colors
  .map(({ hex, rgb }) => {
    return `<div class="color-card">
      <div data-hex="${hex}" class="color-swatch" style="background-color: ${hex};"></div>
      <div class=" color-meta">
       <p>HEX: ${hex}</p> 
       <p>RGB: ${rgb}</p>
      </div>
     </div>`;
  })
  .join("");
console.log(markupCard);

palette.innerHTML = markupCard;
/* palette.append(markupCard) 

//при натисканні колір сайту змінюється
palette.addEventListener("click", (e) => {
  console.log("click");
  console.log(e.target);

  const swatch = e.target.closest(".color-swatch");
  if (!swatch) return;
  console.log(swatch);

  document.body.style.background = swatch.dataset.hex;
}); */

//*Створіть об'єкт JSON з інформацією про книгу. Книга повинна мати наступні поля:
//назва книги
//автор книги
//рік видання
//жанр
//Перевірте, що ваш JSON є коректним за допомогою методу JS ON.parse().
const books = {
  name: "Harry Potter",
  autor: "Joile ROling",
  year: "1997",
  kind: "fantastic",
};

const bookcheck = JSON.stringify(books);
console.log(bookcheck);

const booktrans = JSON.parse(bookcheck);
console.log(booktrans);

//Запросіть у вашого користувача ім'я та вік за допомогою input. Створіть об'єкт JSON з інформацією про користувача, використовуючи дані, які ви отримали від користувача. Перевірте, що ваш JSON є коректним за допомогою методу JSON.parse().

const name = document.querySelector(".user-name");
const age = document.querySelector(".user-age");
const userBtn = document.querySelector(".user-check");

userBtn.addEventListener("click", () => {
  const user = {
    name: name.value,
    age: age.value,
  };

  const userCheckStringify = JSON.stringify(user);
  console.log(userCheckStringify);

  const userCheckParse = JSON.parse(userCheckStringify);
  console.log(userCheckParse);
});

//Напишіть функцію, яка відкриває файл з даними у форматі JSON та повертає об'єкт JavaScript. Файл повинен містити інформацію про список студентів. Для кожного студента повинні бути такі поля:
//ім'я
//прізвище
//рік народження
//номер групи
//оцінки з курсів

const studentJSON = `[
    {
      "name": "Іван",
      "surname": "Петров",
      "birthYear": 2001,
      "groupNumber": "CS-101",
      "grades": { "Math": 95, "Physics": 88 }
    },
    {
      "name": "Марія",
      "surname": "Іванова",
      "birthYear": 2000,
      "groupNumber": "CS-102",
      "grades": { "Math": 90, "Chemistry": 92 }
    }
  ]`;

const getStudentsData = (data) => {
  const students = JSON.parse(data);
  return students;
};
console.log(getStudentsData(studentJSON));
