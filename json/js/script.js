const color = { hex: "#7448h9", rgb: "244, 73, 43" };

const colorJSON = JSON.stringify(color);

console.log(colorJSON);

//*JSON.stringify() перетворює JavaScript-об'єкти у рядок у форматі JSON.

const parceColor = JSON.parse(colorJSON);

console.log(parceColor);

//*JSON.parse() перетворює рядок JSON назад у JavaScript-об'єкт

