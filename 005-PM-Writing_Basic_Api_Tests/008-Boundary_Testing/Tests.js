/*
>>>> You can escape the single quotes using backslash or using double quotes.
>>>>
>>>>
>>>>
>>>>
*/

// Check for a substring in a string.
pm.test("Verify error message", function () {
    const response = pm.response.json();
    pm.expect(response.error).to.have.string('Invalid value for query parameter \'category\'.');
    // OR
    pm.expect(response.error).to.contain('Invalid value for query parameter \'category\'.');
    // OR
    pm.expect(response.error).to.include('Invalid value for query parameter \'category\'.');
});