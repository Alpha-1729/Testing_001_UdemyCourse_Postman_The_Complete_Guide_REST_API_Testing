/*
 * Comparison operators return a boolean — true or false.
 * Use strict equality (===) over loose equality (==) to avoid unexpected results.
 */

console.log(21 > 20); // true

// Strict equality — returns true only if both value AND type are the same.
console.log(21 === 21);   // true
console.log("21" === 21); // false — different types

// Loose equality — returns true if values are equal, ignoring type.
console.log("21" == 21); // true — type coercion applied

// Common mistake — using = (assignment) instead of === (comparison).
let age = 20;
console.log(age = 21);  // assigns 21 to age, prints 21 — not a comparison!
console.log(age);       // 21 — age was reassigned

// Always use === for comparisons to avoid accidental assignment.
console.log(age === 21); // true
