console.log("Запит даних...");

setTimeout(() => {
  console.log("Підготовка даних...");

  const products = {
    name: "TV",
    price: 1000,
  };
  setTimeout(() => {
    (products.status = "ordered"), console.log(products);
    console.log("Відправка даних...");
  }, 2000);
}, 2000);

//?СТворити проміси

console.log("Запит даних...");

const request = new Promise((resolve, reject) => {
  //resolve- Коли виконали успішну якусь дію
  //reject = коли ми виконали помилкову дію
  setTimeout(() => {
    console.log("Підготовка даних...");

    const products = {
      name: "TV",
      price: 1000,
    };
    resolve(products);
  }, 2000);
});

//? then - це метод, який виконується на промісі в випадку успішного виконання (тобто це функція resolve)

request.then((data) => {
  console.log(data); // { name: 'TV', price: 1000 }

  const req2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      data.status = "ordered";
      resolve(data);
    }, 2000);
  });

  req2
    .then((data) => {
      console.log(data);
      data.modified = true;
      return data;
    })
    .then((data) => console.log(data));
});
//? reject та catch - виконується на промісі в випадку помилки (тобто це функція reject)

const myPromise = new Promise((resolve, reject) => {
  const seccess = false;
  if (seccess) {
    resolve("Виконано успішно");
  } else {
    reject("Помилка: щось пішло не так");
  }
});

myPromise
  .then((data) => console.log(data))
  .catch((error) => console.log(error));

//? finally - виконується в кінці проміса, незалежно від того чи він успішний чи ні

const reqFor = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Підготовка даних");
    const products = {
      name: "TV",
      price: 1000,
      count: 1,
    };
    resolve(products);
  }, 2000);
});

reqFor
  .then((product) => {
    console.log("Дані отримано");

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (product.count > 2) {
          product.status = "ordered";
          resolve(product);
        } else {
          reject("Недостатньо товару на складі");
        }
      }, 2000);
    });
  })
  .then((product) => {
    console.log();
    product.modified = true;
    return product;
  })
  .then((product) => {
    console.log(product);
  })
  .catch((error) => console.log(error))
  .finally(() => console.log("Завершена дія"));

//?Ланцюжки промісів
const requestProducts = new Promise((resolve, reject) => {
  setTimeout(() => {
    let seccess = true;
    console.log("Підготовка дани");
    if (seccess) {
      const products = {
        name: "TV",
        price: 1000,
        count: 1,
      };
      resolve(products);
    } else {
      reject("Помилка:щось сталось...");
    }
  }, 2000);
});

requestProducts
  .then((products) => {
    if (products.count > 1) {
      products.status = "order";
      products.status = products.count - 1;

      return products;
    } else {
      return "Недостатньо на складі";
    }
  })

  .then((products) => {
    console.log(products);
    products.modified = true;
    return products;
  })
  .then((products) => {
    console.log(products);
    products.discount = 10;
    return products;
  })
  .then((products) => {
    console.log(products);
  })

  .catch((error) => console.log(error))
  .finally(() => console.log("Завершення промісу"));

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(5);
  }, 2000);
});

promise
  .then((value) => {
    console.log(value); // 5
    return value * 2;
  })
  .then((value) => {
    console.log(value); // 10
    return value * 3;
  })
  .then((value) => {
    console.log(value); // 30
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("Final task");
  });

//? Промісифікації функції-це перетворення функції з колбеками таким чином, щоб вона не приймала колбеки, а повертала проміс.

const feachUserDate = (username) => {
  console.log("Fetching user data from user ", username);
  /* setTimeout(() => {
    let isSuccess = true;
    if (isSuccess) {
      onSuccess("success value");
    } else {
      onError("error value");
    }
  }, 2000);*/
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let isSuccess = true;

      if (isSuccess) {
        resolve("success value");
      } else {
        reject("error value");
      }
    }, 2000);
  });
};
/* const onFeatcSuccess = (value) => {
  console.log(value);
};
const onFeatcError = (value) => {
  console.log(value);
}; */
feachUserDate("Polyna")
  .then((user) => console.log(user))
  .catch((error) => console.log(error));

//!додатково
const URL = "https://jsonplaceholder.typicode.com/users";
const getData = new Promise((resolve, reject) => {
  fetch(URL)
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => reject(error))
    .finally(() => console.log("Завершення дії"));
});
