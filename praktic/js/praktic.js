// Розробка простої пагінації
// Потрібно розробити веб-сторінку, яка відображає список користувачів.
// Створіть функцію або клас, що відповідає за отримання списку користувачів з бази даних або іншого джерела даних.
// Встановіть обмеження кількості користувачів, які будуть відображатись на одній сторінці.
// Реалізуйте пагінацію, яка включає номери сторінок, кнопки "Попередня сторінка" та "Наступна сторінка".
// При кліці на номер сторінки або кнопку "Попередня/Наступна сторінка" відобразіть відповідний список
// користувачів на новій сторінці.
const leftPage = document.getElementById("left");
const rightPage = document.getElementById("right");
const maxUsers = 10;
let countPage = 1;
const usersList = document.getElementById("usersList");

const users = [
  ...Array.from({ length: 60 }, (_, i) => ({
    id: i + 1,
    name: `User${i + 1}`,
    email: `user${i + 1}@example.com`,
    age: Math.floor(Math.random() * 50) + 18,
    isActive: Math.random() > 0.5,
  })),
];
console.log(users);

const renderUsers = () => {
  const start = (countPage - 1) * maxUsers;
  const end = start + maxUsers;
  const usersForRender = users.slice(start, end);
  usersList.innerHTML = usersForRender
    .map(({ name, email, age, isActive }) => {
      return `<li> <p>Name:${name}</p>
 <p>Email:${email}</p>
 <p>Age:${age}</p>
    <p>isActive:${isActive}</p>
    </li>`;
    })
    .join("");
};

leftPage.addEventListener("click", () => {
  if (countPage > 1) {
    countPage--;
    renderUsers();
  } else {
    leftPage.disabled = true;
  }
});

rightPage.addEventListener("click", () => {
  if (countPage === users.length) {
    rightPage.disabled = true;
  } else {
    countPage++;
    renderUsers();
  }
});

renderUsers();

leftPage.addEventListener("click", () => {
  if (countPage > 1) {
    countPage--;
    renderUsers();
    rightPage.disabled = false;
  } else {
    leftPage.disabled = true;
  }
});

rightPage.addEventListener("click", () => {
  if (countPage === users.length / maxUsers) {
    rightPage.disabled = true;
  } else {
    countPage++;
    renderUsers();

    leftPage.disabled = false;
  }
});
