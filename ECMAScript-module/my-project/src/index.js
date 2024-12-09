alert("hello, parsel");

import { nanoid } from "nanoid";
const id = nanoid();

console.log(id);

import { average } from "./average.js";
console.log("Average", average([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
