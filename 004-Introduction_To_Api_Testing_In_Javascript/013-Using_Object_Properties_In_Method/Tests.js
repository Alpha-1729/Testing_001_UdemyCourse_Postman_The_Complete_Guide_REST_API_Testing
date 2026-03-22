const person = {
    firstName: "Jamie",
    lastName: "Doe",
    age: 29,
    isMarried: false,
    sayHello: function () {
        return "Hello, my name is " + this.firstName; // this — refers to the current object
    },
};

console.log(person.sayHello()); // "Hello, my name is Jamie"

// Arrow functions do not have their own 'this' — use regular function to access object properties.
