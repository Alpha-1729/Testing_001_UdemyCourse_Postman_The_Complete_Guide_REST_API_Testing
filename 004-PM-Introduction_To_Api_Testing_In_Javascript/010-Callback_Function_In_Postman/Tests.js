// This code is taken from the snippets.
// Example of callback function in postman.
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});