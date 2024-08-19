//! Intersection Observer API дозволяє виконувати асинхронне спостереження за змінами видимості елемента на веб-сторінці в межах кореневого елемента або в межах viewport (області видимості вікна браузера).
// Цей API є корисним для реалізації відкладеного завантаження зображень (lazy loading), нескінченного прокручування (infinite scrolling), або для відстеження того, коли елементи стають видимими на екрані.

const target = document.querySelector(".target");

const callback = (entries, observer) => {
  console.log(entries);
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // entry.isIntersecting - властивість яка є будевою і вказувати чи перетинається спостерігач елементом з областю видимості (viewport) або з кореневим елементом root в даний момент
      console.log("Елемент видимий");
      observer.unobserve(target); //припиняє спостереження після 1 перетину з елементом
    } else {
      console.log("Елемент невидимий");
    }
  });
};

const option = {
  root: null,
  rootMargin: "0px", //якщо 100 px то він видимий коли його видно тільки кусочок
  threshold: 0.2, //елемент повністю видимий
};

const observer = new IntersectionObserver(callback, option);
observer.observe(target);

//?observer - починаємо спостереженим елементом

setTimeout(() => {
  console.log("припиняємо спостереження");
  observer.disconnect(); //припиняємо спостереження
}, 10000);

//? Основні методи Intersection Observer API
// observe(): Починає спостереження за заданим елементом.
// unobserve(): Припиняє спостереження за заданим елементом.
// disconnect(): Припиняє спостереження за всіма елементами.

//Для завантаження картинок

const images = document.querySelectorAll("img");
const chackImg = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.src = entry.target.dataset.src;
      observer.unobserve(entry.target);
    }
  });
};
const optionsImage = {
  threshold: 0.2,
};
const imageObserver = new IntersectionObserver(chackImg, optionsImage);

images.forEach((image) => imageObserver.observe(image));

//ПРиклад з відео

const videoCheck = (entries, observer) => {
  entries.forEach((entry) => {
    //перевірка чи відео запустилось
    if (entry.isIntersecting !== 0) {
      //чи відео знаходиться за межами viewport або видиме лише на 20%

      if (entry.isIntersecting <= 0.5) {
        entry.target.pause();
      } else {
        entry.target.play;
      }
    }
  });
};
const optionsForVideo = {
  threshold: 0.2,
};

const videoObserver = new IntersectionObserver(videoCheck, optionsForVideo);

const video = document.querySelector("video");
videoObserver.observe(video);

const section = document.querySelectorAll("section");
const links = document.querySelectorAll("a");

const checkSection = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
      links.forEach((link) => {
        link.classList.remove("active");
      });
      const activeId = entry.target.id;

      const activeLink = document.querySelector(`a[href="#${activeId}"]`);

      if (activeLink) {
        activeLink.classList.add("active");
      }
    }
  });
};
const optionsForSection = {
  threshold: 0.5,
};
const sectionObserver = new IntersectionObserver(
  checkSection,
  optionsForSection
);
section.forEach((section) => sectionObserver.observe(section));
