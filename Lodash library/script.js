console.log(_.add(2, 2));
const throttledFunction = _.throttle(() => {
  console.log("Trottled caled");
}, 1000);
window.addEventListener("scroll", throttledFunction);

const throtledOutput = document.querySelector(".output.trottel");

const vannilaOutput = document.querySelector(".output.vannila");

const debounceOutput = document.querySelector(".output.debounce");

let scrollEventCount = 0;

const eventCounter = {
  vannila: 0,
  throttle: 0,
  debounce: 0,
};

document.addEventListener("scroll", () => {
  eventCounter.vannila += 1;
  vannilaOutput.textContent = eventCounter.vannila;
});

document.addEventListener(
  "scroll",
  _.throttle(() => {
    eventCounter.throttle += 1;
    throtledOutput.textContent = eventCounter.throttle;
  }, 1000)
);

document.addEventListener(
  "scroll",
  _.debounce(() => {
    eventCounter.debounce += 1;
    debounceOutput.textContent = eventCounter.debounce;
  }, 300)
);

//?leading (за замовчуванням false) і trailing (за замовчуванням true)

//!Приклад
const input = document.querySelector(".input");
const defoultOutput = document.querySelector("#default");
const debouncedOutput = document.querySelector("#debounced");
const throttleOutput = document.querySelector("#throttle");

input.addEventListener(
  "input",
  _.throttle((event) => {
    throttleOutput.textContent = event.target.value;
  }, 300)
);

input.addEventListener(
  "input",
  _.debounce((event) => {
    debouncedOutput.textContent = event.target.value;
  }, 300)
);

input.addEventListener(
  "input",
  _.debounce((event) => {
    defoultOutput.textContent = event.target.value;
  }, 300)
);
