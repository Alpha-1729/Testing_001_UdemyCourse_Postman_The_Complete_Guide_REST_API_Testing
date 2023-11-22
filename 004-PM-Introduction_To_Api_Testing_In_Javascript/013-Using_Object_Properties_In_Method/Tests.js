// Arrow function syntax will not work, if we want to use the object properties in the method.
const person = {
    firstName: 'Jamie',
    lastName: 'Doe',
    age: 29,
    isMarried: false,
    sayHello: function () {
        return 'Hello, my name is ' + this.firstName;
    }
};

console.log(person.sayHello());