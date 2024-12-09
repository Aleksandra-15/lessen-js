//Створіть калькулятор, який буде складати, віднімати, множити та ділити два числа з використанням модулів. Створіть окремі модулі для кожної математичної операції та для виведення результату на екран.

// Модуль для додавання чисел
function add(a, b) {}

// Модуль для віднімання чисел
function subtract(a, b) {}

// Модуль для множення чисел
function multiply(a, b) {}

// Модуль для ділення чисел
function divide(a, b) {}

// Модуль для виведення результату на екран
function printResult(result) {}

import  printResult from "./calculator-task.js"
import  add from "./add.js"
import  subtract from "./subtract.js"
import  multiply from "./multiply.js"
import  divide from "./divide.js"

// Головний модуль, який використовує модулі для виконання калькулятора
let a = 10;
let b = 5;

let sum = add(a, b);
let difference = subtract(a, b);
let product = multiply(a, b);
let quotient = divide(a, b);

printResult(sum);
printResult(difference);
printResult(product);
printResult(quotient);
