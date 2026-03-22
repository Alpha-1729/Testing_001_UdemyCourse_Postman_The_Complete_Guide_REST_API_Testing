/*
 * find() — returns the first element that satisfies the condition, or undefined if not found.
 * Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
 */

// Finding in a number array.
const numbers = [2, 45, 66, 34, 43];

const foundItem = numbers.find((item) => item === 45);

if (foundItem) {
    console.log("Found it"); // "Found it"
}

// Finding in an object array.
const persons = [
    { name: "Jake", email: "jake@gmail.com" },
    { name: "jose", email: "jose@gmail.com" },
    { name: "peter", email: "peter@gmail.com" },
];

const personFound = persons.find((person) => person.name === "peter");

// Print the email of the found person.
if (personFound) {
    console.log(personFound.email); // "peter@gmail.com"
}
