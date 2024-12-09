//?Methods promise
//!Promice.all() -очікує виконання всіх переданих промісів

const makePromise = (text, delay, success = true) => {
  return new Promise((resolve, reject) => {
    if (success) {
      setTimeout(() => {
        resolve(text);
      }, delay);
    } else {
      reject("Error");
    }
  });
};

Promise.all([makePromise("Hello", 1000), makePromise("World", 2000)])
  .then((data) => console.log("Promise.all", data))
  .catch((err) => console.log(err));

//*Приклад

let seccess = true;
const getProducts = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (seccess) {
        const product = {
          name: "Mascara",
          price: 100,
          currency: "UAN",
          quantitt: "10",
        };
        resolve(product);
      } else {
        reject(new Error("product not found"));
      }
    }, 2000);
  });
};

const getStockInfo = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (seccess) {
        const stockInfo = {
          isStsck: true,
          quantitt: "10",
        };
        resolve(getStockInfo);
      } else {
        reject(new Error("product not found"));
      }
    }, 2000);
  });
};

const getProductsReviews = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (seccess) {
        const reviews = [
          {
            userName: "John",
            rating: 4,
            comment: "Good product",
          },
          {
            userName: "Jane",
            rating: 5,
            comment: "Excellent product",
          },
          {
            userName: "Jim",
            rating: 3,
            comment: "Average product",
          },
        ];
        resolve(reviews);
      } else {
        reject(new Error("Product not found"));
      }
    }, 3000);
  });
};

Promise.all([getProducts(), getStockInfo(), getProductsReviews()])
  .then(([dateilsOfProduct, stock, reviews]) => {
    console.log("Product details:", dateilsOfProduct);
    console.log("Stock info:", stock);
    console.log("Reviews:", reviews);
  })
  .catch((err) => console.log(err));

//!Promise.race()- очікує виконання першого промісу (виконаного або відхиленого)
Promise.race([makePromise("Hello", 1000, false), makePromise("!!!", 2000)])
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

//Приклад

const serchProduct = (productName) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const products = [
        { name: "laptop", price: 1000 },
        { name: "phone", price: 5000 },
        { name: "table", price: 400 },
      ];
      const product = products.find(
        (item) => item.name.toLowerCase() === productName.toLowerCase()
      );
      if (product) {
        resolve(product);
      } else {
        reject("product is not defain");
      }
    }, 9000);
  });
};
const timeout = new Promise((resolve, reject) => {
  setTimeout(() => {
    return reject("Час вийшов");
  }, 5000);
});
Promise.race([serchProduct("laptop"), timeout])
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

//!Promise.any -перший успішно виконаний проміс

Promise.any([
  makePromise("Hello", 1000, false),
  makePromise("World", 2000),
  makePromise("!!!", 3000),
])
  .then((data) => console.log("Promise.any", data))
  .catch((err) => console.log(err));

//! Promise.allSettled - очікує виконання всіх промісів і повертає масив результатів
Promise.allSettled([
  makePromise("Hello", 1000, false),
  makePromise("World", 2000),
  makePromise("!!!", 3000),
])
  .then((data) => console.log("Promise.allSettled", data))
  .catch((err) => console.log(err));

//? Promise.resolve() s Promise.reject() - Створення миттєво виконаного або відхиленого промісу.

Promise.resolve("Success").then((data) => console.log("Promise.resolve", data));
Promise.reject("error").catch((err) => console.log("Promise.resolve", err));

//Приклад
const userLoggrIn = false;
const welcomMessage = userLoggrIn
  ? Promise.resolve("welcome,back!")
  : Promise.reject("pleas loading");

welcomMessage
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

const addToCard = (productId) => {
  const productInStock = false;

  if (productInStock) {
    return Promise.resolve(`${productId} added to cart`);
  } else {
    return Promise.reject("Product is out of stock");
  }
};

addToCard("Шоколадка")
  .then((data) => console.log("Додано в корзину", data))
  .catch((err) => console.log("Вибачте, товар не доступний", err));
// Fulfilled promise

new Promise((resolve) => resolve("success value")).then((value) =>
  console.log(value)
);

Promise.resolve("success value").then((value) => console.log(value));

// Rejected promise

new Promise((resolve, reject) => reject("error")).catch((error) =>
  console.error(error)
);

Promise.reject("error").catch((error) => console.error(error));
