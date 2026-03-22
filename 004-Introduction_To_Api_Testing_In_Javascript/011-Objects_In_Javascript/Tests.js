const person = {
    firstName: "Jamie",
    lastName: "Doe",
    age: 29,
    isMarried: false,
};

// Adding a new property to an object.
person.email = "test@gmail.com";

console.log(person.firstName); // "Jamie"
console.log(person.email);     // "test@gmail.com"

// const prevents reassigning the variable, but object properties can still be modified.
// person = {}; ❌ — cannot reassign
// person.email = "..."; ✅ — can modify properties
