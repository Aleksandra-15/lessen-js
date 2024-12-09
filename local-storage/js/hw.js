//Створити сторінку з списком задач (todo list) і можливістю їх відмічення як виконані. Завдання повинні зберігатися в localStorage, щоб при наступному відкритті сторінки вони залишалися в списку з відповідним статусом (виконані / невиконані).
const inputCheckbox = document.querySelector(".input-check");

localStorage.setItem("inputCheckbox", "input");

//Створіть просту форму з полями вводу і кнопкою, яка зберігає дані в localStorage. При наступному завантаженні сторінки зчитайте збережені дані з localStorage та відобразіть їх у відповідних полях вводу.
//Створіть форму з полями для вводу логіна та пароля. Зберігайте дані про користувача в localStorage та перевіряйте, чи є користувач з таким логіном та паролем при вході на сторінку.

const inputField = document.querySelector(".field");

localStorage.setItem("inputField", JSON.stringify(inputField));

//Створіть "закладки" — список посилань на важливі сторінки. Додавайте, видаляйте та редагуйте посилання в списку, зберігайте його в localStorage, щоб він залишався між сесіями. ???

// Ініціалізуємо закладки з localStorage
let bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];

// Функція для відображення закладок
const displayBookmarks = () => {
  const bookmarksList = document.getElementById("bookmarksList");
  bookmarksList.innerHTML = "";
  bookmarks.forEach((bookmark, index) => {
    bookmarksList.innerHTML += `
            <div class="bookmark-card">
                <p><strong>Назва:</strong> ${bookmark.title}</p>
                <p><strong>Посилання:</strong> <a href="${bookmark.url}" target="_blank">${bookmark.url}</a></p>
                <button onclick="editBookmark(${index})">Редагувати</button>
                <button onclick="deleteBookmark(${index})">Видалити</button>
            </div>
        `;
  });
};

// Функція для додавання закладки
const addBookmark = () => {
  const title = document.getElementById("bookmarkTitle").value;
  const url = document.getElementById("bookmarkUrl").value;

  const newBookmark = { title, url };
  bookmarks.push(newBookmark);
  localStorage.setItem("bookmarks", JSON.stringify(bookmarks));

  clearForm();
  displayBookmarks();
};

// Функція для редагування закладки
const editBookmark = (index) => {
  const bookmark = bookmarks[index];
  document.getElementById("bookmarkTitle").value = bookmark.title;
  document.getElementById("bookmarkUrl").value = bookmark.url;

  document.getElementById("bookmarkForm").innerHTML += `
        <button id="saveButton" onclick="saveBookmark(${index})">Зберегти</button>
    `;
};

// Функція для збереження редагованої закладки
const saveBookmark = (index) => {
  bookmarks[index] = {
    title: document.getElementById("bookmarkTitle").value,
    url: document.getElementById("bookmarkUrl").value,
  };
  localStorage.setItem("bookmarks", JSON.stringify(bookmarks));

  document.getElementById("saveButton").remove();
  clearForm();
  displayBookmarks();
};

// Функція для видалення закладки
const deleteBookmark = (index) => {
  bookmarks.splice(index, 1);
  localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  displayBookmarks();
};

// Очищення форми
const clearForm = () => {
  document.getElementById("bookmarkTitle").value = "";
  document.getElementById("bookmarkUrl").value = "";
};

// Початкове відображення закладок при завантаженні сторінки
displayBookmarks();

//Створіть програму для зберігання контактів — ім'я, прізвище, телефон та електронна адреса. Зберігайте контакти в localStorage та дозволяйте користувачу додавати, видаляти та редагувати контакти.

// Ініціалізуємо контакти з localStorage
let contacts = JSON.parse(localStorage.getItem("contacts")) || [];

// Функція для відображення контактівсщ
const displayContacts = () => {
  const contactsList = document.getElementById("contactsList");
  contactsList.innerHTML = "";
  contacts.forEach((contact, index) => {
    contactsList.innerHTML += `
            <div class="contact-card">
                <p><strong>Ім'я:</strong> ${contact.firstName}</p>
                <p><strong>Прізвище:</strong> ${contact.lastName}</p>
                <p><strong>Телефон:</strong> ${contact.phone}</p>
                <p><strong>Email:</strong> ${contact.email}</p>
                <button onclick="editContact(${index})">Редагувати</button>
                <button onclick="deleteContact(${index})">Видалити</button>
            </div>
        `;
  });
};

// Функція для додавання контакту
const addContact = () => {
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const phone = document.getElementById("phone").value;
  const email = document.getElementById("email").value;

  const newContact = { firstName, lastName, phone, email };
  contacts.push(newContact);
  localStorage.setItem("contacts", JSON.stringify(contacts));

  clearForm();
  displayContacts();
};

// Функція для редагування контакту
const editContact = (index) => {
  const contact = contacts[index];
  document.getElementById("firstName").value = contact.firstName;
  document.getElementById("lastName").value = contact.lastName;
  document.getElementById("phone").value = contact.phone;
  document.getElementById("email").value = contact.email;

  document.getElementById("contactForm").innerHTML += `
        <button id="saveButton" onclick="saveContact(${index})">Зберегти</button>
    `;
};

// Функція для збереження редагованого контакту
const saveContact = (index) => {
  contacts[index] = {
    firstName: document.getElementById("firstName").value,
    lastName: document.getElementById("lastName").value,
    phone: document.getElementById("phone").value,
    email: document.getElementById("email").value,
  };
  localStorage.setItem("contacts", JSON.stringify(contacts));

  document.getElementById("saveButton").remove();
  clearForm();
  displayContacts();
};

// Функція для видалення контакту
const deleteContact = (index) => {
  contacts.splice(index, 1);
  localStorage.setItem("contacts", JSON.stringify(contacts));
  displayContacts();
};

// Очищення форми
const clear = () => {
  document.getElementById("firstName").value = "";
  document.getElementById("lastName").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("email").value = "";
};

// Початкове відображення контактів при завантаженні сторінки
displayContacts();
