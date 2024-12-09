/* Створіть функцію, яка буде додавати об'єкт в localStorage. Назва об'єкту має бути ключем, а сам об'єкт - значенням.
Створіть функцію, яка буде отримувати значення з localStorage за ключем і повертати його як результат функції.
Створіть функцію, яка буде видаляти значення з localStorage за ключем.
Створіть функцію, яка буде очищувати localStorage.
Створіть функцію, яка буде повертати кількість елементів в localStorage.
Створіть функцію, яка буде повертати масив ключів з localStorage.

Створіть функцію, яка буде перевіряти, чи існує об'єкт в localStorage за ключем.
Створіть функцію, яка буде перевіряти, чи існує значення в localStorage.
Створіть функцію, яка буде додавати нове значення до масиву, збереженого в localStorage.
Створіть функцію, яка буде видаляти останній елемент з масиву, збереженого в localStorage. */

const clear = () => {
  localStorage.clear();
};
/* clear(); */

const getLocalStorageLength = () => {
  return localStorage.length;
};
console.log(getLocalStorageLength());

const getLocalStorageKeys = () => {
  return Object.keys(localStorage.key);
};
console.log(getLocalStorageKeys());

const checkKeyInlocalStorage = (key) => {
  try {
    console.log(localStorage.getItem(key));

    return localStorage.getItem(key) === null
      ? undefined
      : JSON.parse(localStorage.getItem(key));
  } catch (err) {
    console.log(err);
  }
};
console.log(checkKeyInlocalStorage("storageSaveName"));

import { save, load } from "./storage.js";

const arrayKeys = [{ age: 21, generetion: "male" }];

const addFunctionLocalStorage = (key, value) => {
  const existingKey = checkKeyInlocalStorage(key) || [];
  if (Array.isArray(existingKey)) {
    existingKey.push(value);
    save(key, existingKey);
  } else {
    console.log();
  }
};

console.log(addFunctionLocalStorage("numbers", 5));
console.log(addFunctionLocalStorage("numbers", 6));
console.log(addFunctionLocalStorage("numbers", 2));

load("numbers");
