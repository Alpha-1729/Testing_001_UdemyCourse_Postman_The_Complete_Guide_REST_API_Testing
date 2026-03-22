/*
>>>> ForEach
        Reference Link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
>>>>
>>>>
>>>>
>>>>
*/

// Callback function.
function logItem(item, index, array) {
    console.log(item, index, array);
}

let numbers = [2, 3, 5, 6, 10, 33];

// Using a callback function.
numbers.forEach(logItem);

// Using a anonymous function.
numbers.forEach(function (item, index, array) {
    console.log(item, index, array);
});

// OR
numbers.forEach((item, index, array) => {
    console.log(item, index, array);
});

// OR
numbers.forEach((item, index, array) => console.log(item, index, array));

// OR
numbers.forEach(console.log);