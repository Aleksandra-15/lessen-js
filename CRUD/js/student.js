//Створити файл db.json з наступними даними
// Додати в проєкт json-server.

//Додати в package.json скрипт “server” та запустити json-server в терміналі за допомогою команди npm server
//GET /students - повернути всіх студентів.
//GET /students/:id - повернути студента за ідентифікатором.
//POST /students - додати нового студента.
//PUT /students/:id - оновити інформацію про студента за ідентифікатором.
//PATCH /students/:id - оновити часткову інформацію про студента за ідентифікатором.

fetch("http://localhost:3000/students/")
  .then((response) => response.json())
  .then((students) => console.log(students))
  .catch((err) => console.log(err));

const userId = 1;

fetch("http://localhost:3000/students/${userId}")
  .then((response) => response.json())
  .then((students) => console.log(students))
  .catch((err) => console.log(err));

const userToCreate = {
  name: "Jasica",
  age: 25,
  email: "jes.92103@gmail.com",
  phone: "380987654321",
};

const userForCreatePost = {
  method: "PATCH",
  body: JSON.stringify(userToCreate),
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
};
fetch("http://localhost:3000/students/", userForCreatePost)
  .then((response) => response.json())
  .then((students) => console.log(students))
  .catch((err) => console.log(err));

const postUpdate1 = {
  name: "Massi",
  age: 76,
  email: "jes.92103@gmail.com",
  phone: "380987654321",
};

const optionsUpdatePost2 = {
  method: "PUT",
  body: JSON.stringify(postUpdate1),
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
};
fetch(`http://localhost:3000/students/${postToUpdate.id}`, optionsUpdatePost2)
  .then((response) => response.json())
  .then((posts) => console.log(posts))
  .catch((err) => console.log(err));

//DELETE /students/:id - видалити студента за ідентифікатором.

const userToDELETE = 2;

fetch(`http://localhost:3000/students/${userToDELETE}`, {
  method: "DELETE",
})
  .then((response) => response.json())
  .then((posts) => console.log("Post deleted"))
  .catch((err) => console.log(err));

const getUserAge = 19;
fetch(`http://localhost:3000/students?age=${getUserAge}`)
  .then((response) => response.json())
  .then((students) => console.log(students))
  .catch((err) => console.log(err));

const getName = "jesica";
fetch(`http://localhost:3000/students?name=${getName}`)
  .then((response) => response.json())
  .then((students) => console.log(students))
  .catch((err) => console.log(err));

const getPhone = "555-9012";

fetch(`http://localhost:3000/students?phone=${getPhone}`)
  .then((response) => response.json())
  .then((students) => console.log(students))
  .catch((err) => console.log(err));
