//*Розробіть програму для відображення списку користувачів з можливістю видалення окремих користувачів. Використовуйте делегування подій для обробки кліків на кнопках видалення, щоб зменшити кількість обробників подій та спростити код.

const userList = document.getElementById("userList");

function deleteUser(event) {
  if (event.target.nodeName === "BUTTON") {
    const item = event.target.parentElement;

    item.remove();
    console.log(item.dataset.id);
  }
}
userList.addEventListener("click", deleteUser);

//*Розробіть програму, яка відображає список завдань з можливістю додавання, видалення та відмітки виконаних завдань. Використовуйте делегування подій для обробки кліків на кнопках видалення та чекбоксах виконаних завдань.
const input = document.querySelector("#newTask");
const btn = document.querySelector("#addTask");
const list = document.querySelector("#taskList");
const form = document.querySelector("form");
const delegationFn = (event) => {
  event.preventDefault();
  if (event.target.nodeName === "BUTTON") {
    const li = document.createElement("li");
    li.innerHTML = `<input type="checkbox"> <span>${input.value}</span> <button type='button'class ="delite">Text Delite</button>`;
    list.appendChild(li);

    /*  input.value = ""; */
  }
};
const handleTaskClick = (event) => {
  event.preventDefault();
  if (event.target.nodeName === "BUTTON") {
    const item = event.target.parentElement;
    item.remove();
  }
};
form.addEventListener("click", delegationFn);
taskList.addEventListener("click", handleTaskClick);

const colorTask = (event) => {
  if (event.target.type === "checkbox") {
    event.target.nextSibling.style.color = "#000000" ? "#4feb34" : "#000000";
  }
};
list.addEventListener("click", colorTask);
// Отримати посилання на список завдань

// Додати обробник події для додавання нового завдання
// Заборонити стандартну поведінку форми

// Створити новий елемент завдання

// Очистити поле введення

// Додати обробник події для видалення завдання

// Додати обробник події для відмітки виконання завдання
