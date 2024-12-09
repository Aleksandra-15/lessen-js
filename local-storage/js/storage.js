export const load = (key) => {
  try {
    //отримуємо дані які зберігаються у локальному сховищі під ключем key
    const getData = localStorage.getItem(key);

    //якщо немає данх нам повертається null і ми робимо перевірку, що якщо в нас нічого немає, тоді ми повертаємо underfined, якщо ж дані є ми їх парсимо (перетворюємо в js Обєкт)
    return getData === null ? undefined : JSON.parse(getData);
  } catch (err) {
    //у випадку помилки (наприклад під час парсингу ) тоді вона буде виведена у консоль:
    console.log(err);
  }
};
export const save = (key, value) => {
  try {
    const setData = JSON.stringify(value);
    localStorage.setItem(key, setData);
  } catch (err) {
    console.log(err);
  }
};

const exampleStorage = {
  name: "ira",
  age: "21",
};
save("storageSaveName", exampleStorage);
save("storageSaveName", "Ira");
console.log(load("name"));

const remove = (key) => {
  try {
    localStorage.removeItem(key);
  } catch (err) {
    console.log(err);
  }
};
