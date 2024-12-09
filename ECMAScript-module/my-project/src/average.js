export const average = (numbers) => {
  const total = numbers.reduce((acc, num) => acc + num, 0);
  return total / numbers.length;
};

/* average([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
 */