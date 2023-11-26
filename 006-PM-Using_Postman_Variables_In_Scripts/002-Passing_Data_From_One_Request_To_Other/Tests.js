/*
>>>>
>>>>
>>>>
>>>>
>>>>
*/

// Checking the length of the array in the response.
const response = pm.response.json();
pm.expect(response.length).to.be.above(0);

// Check the property of the object from the response.
const product = response[0];
pm.expect(product).to.be.an('object');
pm.expect(product).to.haveOwnProperty('id');