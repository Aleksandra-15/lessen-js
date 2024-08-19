//Потрібно затримати виконання функції при введенні тексту в поле input, щоб не перевантажувати сервер. Використовуйте метод throttle з бібліотеки lodash. Встановіть час затримки в мілісекундах, наприклад 500мс, і передайте функцію, яку потрібно виконати при введенні тексту.

const delayEvent = document.querySelector('.delay-event')
const handlInput = ()=>{
    const inputValue = delayEvent.value
    console.log(delayEvent);
}

