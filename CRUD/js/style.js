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

