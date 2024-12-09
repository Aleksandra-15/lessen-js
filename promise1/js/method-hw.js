//"Порівняння кількох промісів"

//Ви маєте набір функцій, які повертають проміси з випадковими затримками. Ваше завдання — виконати всі проміси одночасно за допомогою Promise.all і обробити результати.

//Створіть функцію delayedPromise, яка приймає значення і затримку (у мілісекундах) і повертає проміс, який вирішується з заданим значенням після затримки.
//Створіть масив з 5 промісів, використовуючи функцію delayedPromise, із різними значеннями та затримками.
//Використайте Promise.all, щоб одночасно виконати всі проміси з масиву.
//Обробіть результати вирішення промісів та виведіть їх у консоль.

const delayedPromise = (value, delay) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(value);
    }, delay);
  });
};

const promises = [
  delayedPromise("Проміс 1", 1000),
  delayedPromise("Проміс 2", 3000),
  delayedPromise("Проміс 3", 2000),
  delayedPromise("Проміс 4", 1500),
  delayedPromise("Проміс 5", 500),
];
Promise.all(promises)
  .then((results) => {
    console.log("Всі проміси виконані!");
    console.log("Результати:", results);
  })
  .catch((error) => {
    console.error("Сталася помилка в одному з промісів:", error);
  });

//Ви маєте набір функцій, які повертають проміси з випадковими затримками. Ваше завдання — виконати всі проміси одночасно за допомогою Promise.race і отримати результат найшвидшого проміса.

//Створіть функцію randomDelay, яка приймає значення і повертає проміс з випадковою затримкою (від 1000 до 5000 мілісекунд).
//Створіть масив з 5 промісів, використовуючи функцію randomDelay, із різними значеннями.
//Використайте Promise.race, щоб виконати всі проміси з масиву і отримати результат найшвидшого проміса.
//Обробіть результат найшвидшого проміса та виведіть його у консоль.

const randomDelay = (value) => {
  const delay = Math.floor(Math.random() * (5000 - 1000 + 1)) + 1000;
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(value);
    }, delay);
  });
};

const promises2 = [
  randomDelay("Проміс 1"),
  randomDelay("Проміс 2"),
  randomDelay("Проміс 3"),
  randomDelay("Проміс 4"),
  randomDelay("Проміс 5"),
];

Promise.race(promises2)
  .then((fastestResult) => {
    console.log("Найшвидший проміс:", fastestResult);
  })
  .catch((error) => {
    console.error("Сталася помилка:", error);
  });
