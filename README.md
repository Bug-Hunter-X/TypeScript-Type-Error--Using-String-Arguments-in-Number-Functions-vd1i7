# TypeScript Type Error: String Arguments in Number Functions

This example demonstrates a common TypeScript type error that arises when passing string arguments to functions expecting numbers. The compiler's type checking helps prevent runtime errors by catching these mismatches.

## Bug

The `add` and `subtract` functions are defined to accept number arguments. Attempting to use string arguments results in a compilation error.

## Solution

The solution involves ensuring that the arguments passed to the functions are indeed numbers. This can be achieved by explicit type checking or by using type guards.  The solution demonstrates type assertion (though it's better to prevent this problem by fixing the input types instead)