const image = document.querySelectorAll("img");

const callback = (entries, observer) => {
  console.log(entries);
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      console.log("Елемент видимий ");
      observer.unobserve(img);
    } else {
      console.log("Елемент не видимий");
    }
  });
};
