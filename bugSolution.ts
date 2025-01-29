function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

const result1 = add(5, 3); // Works fine
const result2 = subtract(10, 5); // Works fine

// Solution: Type assertion (use with caution)
const result3 = add(5, <number>"3");
const result4 = subtract(10, <number>"5"); // The problem here is that it might cause runtime errors if the input is not a number, as "3" will be converted to number 3 implicitly.  
// A safer approach involves using type guards or ensuring inputs are always numbers from the outset.

//Better Solution: Ensure number inputs or explicit type checking
function addSafe(a: number, b: number): number {
    return a + b;  //type checking happens in compile time, so it is safe
}
function subtractSafe(a: number, b: number): number {
    return a - b;  //type checking happens in compile time, so it is safe
}

const result5 = addSafe(5, 3); // Works fine
const result6 = subtractSafe(10, 5); // Works fine
const num1: number = Number("5");//Explicit type casting and type checking is the most ideal solution
const num2: number = Number("3");
const result7 = addSafe(num1, num2);