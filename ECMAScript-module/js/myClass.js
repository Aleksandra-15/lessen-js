const sqrt = Math.sqrt;

//*export const square = (x) => x * x;
//*export const diag = (x, y) => sqrt(square(x) + square(y));

//Другий спосіб

export const square = (x) => x * x;
export const diag = (x, y) => sqrt(square(x) + square(y));

export { square, diag };
