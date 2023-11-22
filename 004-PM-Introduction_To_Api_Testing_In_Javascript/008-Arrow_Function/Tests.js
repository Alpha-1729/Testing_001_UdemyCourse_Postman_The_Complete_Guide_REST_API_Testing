const sayHello = function () {
    console.log('Hello');
}

// Arrow function.
const sayHi = (name) => {
    console.log('Hi ' + name);
}

// One liner arrow function.
const add = (a, b) => a + b;

sayHello();
sayHi('Jamie');
console.log(add(2, 3));