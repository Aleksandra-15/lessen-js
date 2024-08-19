const grandparent = document.querySelector("#grandparent");
const parent = document.querySelector("#parent");
const child = document.querySelector("#child");

const logEvent = (e) => {
  alert(`${e.currentTarget.id} - ${e.eventPhase}`);
};

//? Обробники подій для фази занурення, третій аргумент true - використовується для того щоб побачити фазу занурення
grandparent.addEventListener("click", logEvent, true);
parent.addEventListener("click", logEvent, true);
child.addEventListener("click", logEvent, true);

//? Для фази спливання
grandparent.addEventListener("click", logEvent);
parent.addEventListener("click", logEvent);
child.addEventListener("click", logEvent);

const outher = document.querySelector("#outher");
const middle = document.querySelector("#middle");
const inner = document.querySelector("#inner");

const handleClick = (event) => {
  alert(`клік на елемент${event.currentTarget.id} `);
  alert(`клік на вихідний елемент${event.target.id} `);
  alert("---");
};
outher.addEventListener("click", logEvent);
middle.addEventListener("click", logEvent);
inner.addEventListener("click", logEvent);

//? Палітра кольорів

const colorPalette = document.querySelector(".color-palette");
const output = document.querySelector(".output");

const getRandomColor = () => {
  return Math.round(Math.random() * 256)
    .toString(16)
    .padStart(2, "8");
};

const createPaletteItems = () => {
  const items = [];
  for (let i = 0; i < 68; i++) {
    const color = `#${getRandomColor()}${getRandomColor()}${getRandomColor()}`;
    const item = document.createElement("button");
    item.dataset.color = color;
    item.style.backgroundColor = color;
    item.classList.add("item");
    items.push(item);
  }
  colorPalette.append(...items);
};

createPaletteItems();

const selectColor = (event) => {
  //*nodeName = цу властивість яка повертає назву тегу з великої букви у верхньому регістрі
  if (event.target.nodeName !== "BUTTON") return;
  const selectedColor = event.target.dataset.color;
  output.textContent = `Selected color: - ${selectedColor}`;
  output.style.color = selectedColor;
};
colorPalette.addEventListener("click", selectColor);

//! делегування подій
const buttonContainer = document.querySelector("#buttonContainer");
for (let i = 1; i <= 100; i++) {
  const button = document.createElement("button");
  button.textContent = `Кнопка ${i}`;
  button.dataset.id = i;

  buttonContainer.appendChild(button);
}

const addNewButton = () => {
  const newButtonId = buttonContainer.children.length;
  const newButton = document.createElement("button");
  newButton.textContent = `Нова кнопка ${newButtonId}`;
  newButton.dataset.id = "newButtonId";

  buttonContainer.appendChild(newButton);
};

buttonContainer.addEventListener("click", (event) => {
  if (event.target.nodeName === "BUTTON") {
    const buttonId = event.target.dataset.id;
    console.log(`Натиснуто на кнопку з ID ${buttonId}`);
  }
});

const addButton = document.createElement("button");
addButton.dataset.id = "addButton";
addButton.textContent = "Додати кнопку";
addButton.addEventListener("click", addNewButton);

buttonContainer.appendChild(addButton);
