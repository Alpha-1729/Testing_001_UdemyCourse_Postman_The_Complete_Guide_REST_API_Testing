/*
 * forEach() — calls a callback function once for each element in an array.
 * Callback receives three arguments: item (current element), index, array.
 * Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
 */

function logItem(item, index, array) {
    console.log(item, index, array);
}

let numbers = [2, 3, 5, 6, 10, 33];

// Using a named callback function.
numbers.forEach(logItem);

// Using an anonymous function.
numbers.forEach(function (item, index, array) {
    console.log(item, index, array);
});

// Using an arrow function.
numbers.forEach((item, index, array) => {
    console.log(item, index, array);
});

// One-liner arrow function.
numbers.forEach((item, index, array) => console.log(item, index, array));

// Shortest — passing console.log directly as a callback.
numbers.forEach(console.log);
