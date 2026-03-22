/*
 * map() — creates a new array by applying a callback function to each element.
 * Does NOT modify the original array.
 * Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 */

const array1 = [1, 4, 9, 16];

// Using an arrow function.
const map1 = array1.map((x) => x * 2);
console.log(map1); // [2, 8, 18, 32]

// Using a named function.
function multiplyByTwo(number) {
    return number * 2;
}
const map2 = array1.map(multiplyByTwo);
console.log(map2); // [2, 8, 18, 32]
