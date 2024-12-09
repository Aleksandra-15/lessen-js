//Напишіть функцію, яка приймає URL зображення і повертає проміс, який завантажує це зображення. Якщо завантаження успішне, проміс виконується з завантаженим зображенням, а в разі помилки - відхиляється з повідомленням про помилку.

const imageLoad = (url) => {
  return new Promise((resolve, reject) => {
    const img = document.createElement("img");
    img.src = url;
    img.addEventListener("error", () => {
      reject(new Error("Error it loading"));
    }); //Подія loadзапускається, коли завантажується вся сторінка, включаючи всі залежні ресурси, такі як таблиці стилів, сценарії, iframe та зображення, за винятком тих, які завантажуються ліниво
  });
};

imageLoad(
  "https://leatherbeltsonline.com/wp-content/uploads/2023/10/Helloween-vs-Helloween-What-is-Difference.jpg"
)
  .then((img) => document.body.append(img))
  .catch((error) => alert(error));
imageLoad("https://i.redd.it/3ma6nhepxbb81.jpg")
  .then((img) => document.body.append(img))
  .catch((error) => alert(error));
