function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

const result1 = add(5, 3); // Works fine
const result2 = subtract(10, 5); // Works fine

const result3 = add(5, "3"); // Type error
const result4 = subtract(10, "5"); // Type error