//!Запис даних у LocalStorage

//? Метод setItem(key, value) використовується для зберігання даних. Дані зберігаються у вигляді пари "ключ-значення". Значення обов’язково має бути рядком (string).

localStorage.setItem("username", "Jonh");
localStorage.setItem("age", "17");
localStorage.setItem("theme", "light");

const user = { name: "Yulia", age: 21 };

localStorage.setItem("user", JSON.stringify(user));

const settings = {
  theme: "dark",
  isAuthorizide: true,
  option: [1, 2, 3],
};
localStorage.setItem("settings", JSON.stringify(settings));

//!Readin base for localStorage

//? Метод getItem(key) використовується для отримання значення за певним ключем.

const username = localStorage.getItem("username");
console.log(username); //jonh

const theme = localStorage.getItem("theme");
console.log(theme); //light

const userFromStorage = localStorage.getItem("user");
console.log(userFromStorage); //{ name: "Yulia", age: 21 };

const parsedUser = JSON.parse(userFromStorage);
console.log(parsedUser);

const settingsFromStorage = localStorage.getItem("settings");

const parsedSettings = JSON.parse(settingsFromStorage);
console.log(parsedSettings); // theme: "dark",isAuthorizide: true, option: [1, 2, 3],

//!Видалення даних з LocalStorage

//? Метод removeItem(key) використовується для видалення елементу за ключем

localStorage.removeItem("theme");
localStorage.removeItem("age");

//перевірка видалених даних

console.log(localStorage.getItem("theme")); //null
console.log(localStorage.getItem("age")); //null

//! ВИдалиння всіх даних з LocalStorage

//? Метод clear() видаляє всі дані з localStorage.
// Очищуємо весь localStorage

localStorage.clear();

console.log(localStorage.getItem("name")); //null
console.log(localStorage.getItem("age")); //null
/* не правильно
const userExample = {
  name:'yulia'
}
console.log(JSON.parse(userExample));
 */