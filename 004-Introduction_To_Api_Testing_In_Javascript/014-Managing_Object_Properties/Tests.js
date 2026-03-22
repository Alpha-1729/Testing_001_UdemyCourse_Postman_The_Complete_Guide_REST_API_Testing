// If we want to use special characters in the object properties, wrap the property name in single quotes or double quotes.
const person = {
    'first-name': 'Jamie',
    'last name': 'Doe',
    age: 29,
    'is-married': false,
    sayHello: function () {
        return 'Hello, my name is ' + this['first-name'];
    }
};

console.log(person['last name']);
console.log(person['age']);