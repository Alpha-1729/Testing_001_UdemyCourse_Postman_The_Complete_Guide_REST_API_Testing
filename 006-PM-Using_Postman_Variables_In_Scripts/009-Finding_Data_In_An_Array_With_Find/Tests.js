/*
>>>> Find
        Reference Link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
>>>>
>>>>
>>>>
>>>>
*/

// Finding in a number array.
const numbers = [2, 45, 66, 34, 43];

let foundItem = numbers.find((item) => item === 45);

if (foundItem) {
    console.log('Found it');
}

// Finding in a object array.
const persons = [
    {
        name: 'Jake',
        email: 'jake@gmail.com'
    },
    {
        name: 'jose',
        email: 'jose@gmail.com'
    },
    {
        name: 'peter',
        email: 'peter@gmail.com'
    }
];

let personFound = persons.find((person) => person.name === 'peter');

// Print the email of the found person.
if (personFound) {
    console.log(personFound.email);
}

