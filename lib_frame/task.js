/* Створити простий список завдань з можливістю додавання, видалення та відмічення завдань як виконаних. Кожне завдання повинно мати унікальний ідентифікатор.

 Підключити бібліотеку nanoid до проекту.
Створити функцію addTask для додавання нового завдання до списку в якій:

Створюємо новий елемент списку
Додаємо текст завдання до елементу списку
Додаємо кнопки для видалення та відмічення завдання як виконаного
 Додаємо нове завдання до списку
Очищаємо поле вводу
Створити функцію deleteTask для видалення завдання зі списку
Створити функцію markTaskDone для відмічення завдання як виконаного.
Додати обробники подій для кнопок "Add Task" та "Enter" на полі вводу
Додати стилі для елементів списку
 */

import { nanoid } from "nanoid/non-secure";
const ul = document.getElementById("taskList");

const addTask = () => {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value;
  const taskID = nanoid(2);
  const taskItem = document.createElement("li");
  taskItem.innerHTML = `<p>(${taskText})</p> <button class="delete_btn">text delete</button>`;
  ul.appendChild(taskItem);
  taskInput.value = " ";
  taskItem.id = taskID;
};
const deleteTask = () => {
  const deleteBtn = taskItem.querySelector(".delete_btn");
  deleteBtn.addEventListener("click", "delete");
};
const addTaskBtn = document.querySelector("#addTaskBtn");

addTaskBtn.addEventListener("click", addTask);
