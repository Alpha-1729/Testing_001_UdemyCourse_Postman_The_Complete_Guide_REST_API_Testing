/*
 * You can escape single quotes using a backslash (\') or by using double quotes instead.
 */

// Check for a substring in a string.
pm.test("Verify error message", function () {
    const response = pm.response.json();

    pm.expect(response.error).to.have.string("Invalid value for query parameter 'category'.");
    // OR
    pm.expect(response.error).to.contain("Invalid value for query parameter 'category'.");
    // OR
    pm.expect(response.error).to.include("Invalid value for query parameter 'category'.");
});
