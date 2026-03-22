/*
>>>> Map
        Reference Link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
>>>>
>>>>
>>>>
>>>>
*/

const array1 = [1, 4, 9, 16];

// Pass a function to map
const map1 = array1.map((x) => x * 2);

console.log(map1);
// Expected output: Array [2, 8, 18, 32]


// OR
function multiplyByTwo(number) {
    return number * 2;
}
const map2 = array1.map(multiplyByTwo);
console.log(map2);

