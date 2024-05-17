/*
>>>> equal and eql in assertions.
        equal() is used to compare the objects, and eql() is used to compare the properties of the objects.
>>>>
>>>>
>>>>
>>>>
*/

// These are the assertions in the chai library.
pm.test('Status should be 200', () => {
    // Adding custom error message.
    pm.expect(101).to.equal(101, 'must equal 101')

    // Assertion on the object.
    let a = {
        "name": "John"
    };
    let b = {
        "name": "Jane"
    };

    // This will compare the each property of the object.
    pm.expect(a).to.eql(b);

    // This will compare the entire object.
    // Assertion will be false, even all the properties are same.
    pm.expect(a).to.equal(b);
    
    pm.expect(a).to.not.equal(b);

    // Assertion on null and undefined and empty array.
    pm.expect(null).to.be.null;
    pm.expect(undefined).to.be.undefined;
    pm.expect([]).to.be.empty;

    // Checking items in the array.
    pm.expect([1, 2, 4, 5]).to.include(4);
    pm.expect(2).to.be.oneOf([1, 2, 3, 4, 100]);

    // Regular expression on assertions.
    // Name should start with John.
    pm.expect('John').to.match(/^John/);
});