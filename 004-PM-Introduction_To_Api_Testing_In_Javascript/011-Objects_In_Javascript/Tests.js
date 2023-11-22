const person = {
    firstName: 'Jamie',
    lastName: 'Doe',
    age: 29,
    isMarried: false
};

// Adding new property to object.
person.email = 'test@gmail.com';

console.log(person.firstName);
console.log(person.email);

// Here we declare person object using const keyword, but we can add more properties to object.
// But can reassign that object.