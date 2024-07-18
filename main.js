"use strict";
/*-------------------------------------------------------------------------------------------------------------
 *------------------------------------------------- VARIABLES -------------------------------------------------
 *-------------------------------------------------------------------------------------------------------------*/
// In TypeScript (and JavaScript), there are three types of variables: `let`, `const`, and `var`.
// `let` is used to declare variables that can be reassigned. It has block scope, meaning it is only accessible 
// within the block it is defined.
// `const` is used to declare variables that cannot be reassigned. It also has block scope.
// `var` declares a variable that can be reassigned and has function scope. 
// We avoid using `var` because it has function scope and allows hoisting, which can lead to unexpected behavior
// and bugs.
/*-------------------------------------------------------------------------------------------------------------
 *------------------------------------------------- EXAMPLES -------------------------------------------------
 *-------------------------------------------------------------------------------------------------------------*/
let fruit = "Apple";
fruit = "Mango"; // Allowed because `fruit` is declared with `let`
console.log(fruit); // Logs "Mango"
const myAge = 13;
// myAge = 14;   // Error: Cannot assign to 'myAge' because it is a constant
console.log(myAge); // This line won't execute due to the error above
/*-------------------------------------------------------------------------------------------------------------
 *------------------------------------------------- TYPE INFERENCE -------------------------------------------------
 *-------------------------------------------------------------------------------------------------------------*/
// In TypeScript, type inference automatically deduces the data type of variables based on the values assigned to them.
// Type inference examples:
let e = "UAE"; // `e` is inferred as `string`
let f = 3.12; // `f` is inferred as `number` initially
f = 29; // `f` remains `number` after reassignment
let g = false; // `g` is inferred as `boolean` initially
g = true; // `g` remains `boolean` after reassignment
/*-------------------------------------------------------------------------------------------------------------
 *------------------------------------------------- STRONG TYPING -------------------------------------------------
 *-------------------------------------------------------------------------------------------------------------*/
// Strong typing means that variables must be explicitly defined with specific data types in TypeScript.
// Strongly typed syntax examples:
let a = "Pakistan"; // Explicitly defining 'a' as string
a = "UAE"; // Valid reassignment
let b = 5; // Explicitly defining 'b' as number
let c = true; // Explicitly defining 'c' as boolean
/*-------------------------------------------------------------------------------------------------------------
 *---------------------------------------------- OPERATORS IN TYPESCRIPT ----------------------------------------------
 *-------------------------------------------------------------------------------------------------------------*/
/************************************************** ARITHMETIC OPERATORS **************************************************/
// Addition (+)
let num1 = 4;
let num2 = 6;
let add = num1 + num2;
console.log("\nArithmetic Operators:");
console.log("Addition (+):", add); // Output: 10
// Subtraction (-)
let num3 = 10;
let num4 = 8;
let subtract = num3 - num4;
console.log("Subtraction (-):", subtract); // Output: 2
// Multiplication (*)
let num5 = 5;
let num6 = 6;
let multiply = num5 * num6;
console.log("Multiplication (*):", multiply); // Output: 30
// Division (/)
let num7 = 9;
let num8 = 3;
let divide = num7 / num8;
console.log("Division (/):", divide); // Output: 3
// Exponentiation (**)
let base = 6;
let exponent = 2;
let power = base ** exponent;
console.log("Exponentiation (**):", power); // Output: 36
// Modulus (%)
let strawberry = 7;
let bags = 2;
let remainder = strawberry % bags;
console.log("Modulus (%):", remainder); // Output: 1
/************************************************** UNARY OPERATORS (++)(--) **************************************************/
// Unary operators modify the value of a single operand:
let i = 7;
let j = 3;
++i; // Increment i to 8
--j; // Decrement j to 2
console.log("\nUnary Operators:");
console.log("Incremented i:", i); // Output: 8
console.log("Decremented j:", j); // Output: 2
/************************************************** ASSIGNMENT OPERATORS **************************************************/
// Assignment operators assign values to variables based on arithmetic operations:
let d = 10;
d += 5; // Equivalent to: d = d + 5;
console.log("\nAssignment Operator (+=):", d); // Output: 15
/************************************************** COMPARISON OPERATORS **************************************************/
// Comparison operators compare two values and return a boolean result:
let num9 = 10;
let num10 = 5;
console.log("\nComparison Operators:");
console.log("Equal (==):", num9 == num10); // Output: false
console.log("Not Equal (!=):", num9 != num10); // Output: true
console.log("Greater than (>):", num9 > num10); // Output: true
console.log("Less than (<):", num9 < num10); // Output: false
/************************************************** LOGICAL OPERATORS **************************************************/
// Logical operators perform logical operations on boolean values:
let x = true;
let y = false;
console.log("\nLogical Operators:");
console.log("Logical AND (&&):", x && y); // Output: false
console.log("Logical OR (||):", x || y); // Output: true
console.log("Logical NOT (!):", !x); // Output: false
/************************************************** COMBINING OPERATORS **************************************************/
// Combining operators combine multiple conditions for conditional statements:
let p = 5;
let q = 10;
let r = 15;
let combinedResult = (p + q) * r; // Parentheses for clarity
console.log("\nCombining Operators:");
console.log("(p + q) * r =", combinedResult); // Output: 225
