const inputSlider = document.querySelector(".slider__input");
const img = document.querySelector(".slider__image");

inputSlider.addEventListener(
  "input",
  _.debounce((event) => {
    debounceOutput.textContent = event.target.value;
    const scale = event.target.value;
    img.style.width = scale + "%";
  }, 100)
);

//Потрібно забезпечити плавне переміщення об'єкту при русі мишкою. Рішення: використовуйте метод debounce з бібліотеки lodash. Встановіть час затримки в мілісекундах, наприклад 100мс, і передайте функцію, яка буде виконуватися при переміщенні мишкою.

const box = document.querySelector("box");

const handleMouseMove = (e) => {
  const offsetXY = document.body.getBoundingClientRect();
  console.log(offsetXY);
  const x = e.clientX - offsetXY.left;
  const y = e.clientY - offsetXY.top;

  box.style.left = x + "px";
  box.style.top = y + "px";
};

document.addEventListener(
  "mousemove",
  _.debounce((e) => {
    handleMouseMove(e);
  }, 100)
);
