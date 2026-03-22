// Anonymous function — a function without a name, assigned to a variable.
const sayHello = function () {
    console.log("Hello");
};

// Arrow function — a shorter syntax for anonymous functions.
const sayHi = (name) => {
    console.log("Hi " + name);
};

// One-liner arrow function — no curly braces needed for a single expression.
const add = (a, b) => a + b;

sayHello();          // "Hello"
sayHi("Jamie");      // "Hi Jamie"
console.log(add(2, 3)); // 5
