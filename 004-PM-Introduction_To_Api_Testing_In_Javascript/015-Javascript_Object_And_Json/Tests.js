const person = {
    firstName: 'Jamie',
    lastName: 'Doe',
    age: 29,
    isMarried: false,
    sayHello: () => 'Hello'
};

// Converting object to json.
let json = JSON.stringify(person);
console.log(json);

// Converting json to object.
let personNew = JSON.parse(json);
console.log(personNew);