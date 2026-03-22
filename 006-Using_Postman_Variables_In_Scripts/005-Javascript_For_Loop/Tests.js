/*
 * for loop — repeats a block of code a specific number of times.
 * Syntax: for (initialization; condition; increment/decrement) { }
 */

for (let i = 0; i <= 10; i++) {
    console.log(i); // 0, 1, 2, ... 10
}

// Iterating over an array using a for loop.
let numbers = [1, 3, 4, 5];
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]); // 1, 3, 4, 5
}
