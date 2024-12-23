//Використовуючи API Pixabay (https://pixabay.com/service/about/api/), розробіть просту веб-сторінку, яка дозволить користувачам переглядати список зображень з розділу "Editor's Choice" (вибір редакції). Необхідно реалізувати пагінацію для поділу зображень на окремі сторінки.
//Ознайомтесь з документацією API Pixabay і отримайте API-ключ для доступу до даних.
//Створіть веб-сторінку з основною структурою HTML, яка буде містити список зображень та кнопку Завантажити ще.
//Напишіть функцію або клас, яка виконуватиме запити до API Pixabay, передаючи необхідні параметри, такі як API-ключ, тип запиту та номер сторінки.
//Використайте отримані дані для відображення зображень на сторінці.
//Встановіть обмеження кількості зображень, які будуть відображатись на одній сторінці.
//Реалізуйте пагінацію, яка включатиме кнопку "Завантажити ще"
//При кліці на кнопку "Завантажити ще" виконайте відповідний запит до API Pixabay і оновіть список зображень на новій сторінці.
//Додайте стилізацію до сторінки, щоб покращити її вигляд та користувацький досвід.
//Завершіть сторінку додатковими функціями, наприклад, можливістю зберігати стан пагінації при перезавантаженні сторінки або додатковими фільтрами для зображень.
//Протестуйте вашу веб-сторінку, переконайтесь, що пагінація працює належним чином та зображення відображаються правильно на різних сторінках.
const API_KEY = "https://pixabay.com/service/about/api/";
const BASE_URL = "https://pixabay.com/api/";
let currentPage = 1;
const imagesPerPage = 20;

async = fetchImages = (page) => {
  const response = fetch(
    `${BASE_URL}?key=${API_KEY}&page=${page}&per_page=${imagesPerPage}&order=popular`
  );
  const data = response.json();
  return data.hits;
};

const displayImages = (images) => {
  const gallery = document.getElementById("image-gallery");
  images.forEach((image) => {
    const imgElement = document.createElement("img");
    imgElement.src = image.webformatURL;
    imgElement.alt = image.tags;
    gallery.appendChild(imgElement);
  });
};

async = loadImages = () => {
  const images = fetchImages(currentPage);
  displayImages(images);
};

document.getElementById("load-more").addEventListener("click", () => {
  currentPage++;
  loadImages();
});

loadImages();
