// Wrap property names with special characters (spaces, hyphens) in quotes.
const person = {
    "first-name": "Jamie",
    "last name": "Doe",
    age: 29,
    "is-married": false,
    sayHello: function () {
        return "Hello, my name is " + this["first-name"]; // must use bracket notation for special keys
    },
};

console.log(person["last name"]); // "Doe"
console.log(person["age"]);       // 29

// Dot notation won't work for special character keys — use bracket notation instead.
// person."last name" ❌
// person["last name"] ✅
