//! CRUD

//?Read GET

let postID = 98;

fetch(`https://jsonplaceholder.typicode.com/posts/${postID}`)
  .then((response) => response.json())
  .then((posts) => console.log(posts))
  .catch((err) => console.log(err));

//? Create POST

const postToAdd = {
  title: "Mango",
  body: "yummy",
};
const optionsForCreatePost = {
  method: "POST",
  body: JSON.stringify(postToAdd),
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
};
fetch(`https://jsonplaceholder.typicode.com/posts`, optionsForCreatePost)
  .then((response) => response.json())
  .then((posts) => console.log(posts))
  .catch((err) => console.log(err));

//? Update PUT/Patch

const postToUpdate = {
  id: 1,
  body: "CRUD is awesome",
};

const optionsForUpdatePost = {
  method: "PATCH",
  body: JSON.stringify(postToUpdate),
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
};
fetch(
  `https://jsonplaceholder.typicode.com/posts/${postToUpdate.id}`,
  optionsForUpdatePost
)
  .then((response) => response.json())
  .then((posts) => console.log(posts))
  .catch((err) => console.log(err));

//?delete DELETE
const postToDELETE = 1;

fetch(`https://jsonplaceholder.typicode.com/posts/${postToDELETE}`, {
  method: "DELETE",
})
  .then((response) => response.json())
  .then((posts) => console.log("Post deleted"))
  .catch((err) => console.log(err));

// Додати в проєкт json-server.
//Створити файл db.json з наступними даними

//Додати в package.json скрипт “server” та запустити json-server в терміналі за допомогою команди npm server
//GET /students - повернути всіх студентів.
//GET /students/:id - повернути студента за ідентифікатором.
//POST /students - додати нового студента.
//PUT /students/:id - оновити інформацію про студента за ідентифікатором.
//PATCH /students/:id - оновити часткову інформацію про студента за ідентифікатором.
