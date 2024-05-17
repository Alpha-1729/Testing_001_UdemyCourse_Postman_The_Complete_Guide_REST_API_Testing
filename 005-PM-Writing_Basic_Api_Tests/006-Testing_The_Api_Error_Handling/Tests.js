/*
>>>> Request
        POST {{baseUrl}}/orders
        POST https://simple-grocery-store-api.glitch.me/orders
>>>>
>>>>
>>>>
>>>>
*/

pm.test("Status code is 401", function () {
    pm.response.to.have.status(401);
});

// Remove the authorization header in the request.
// This is an example of the negative testing.
pm.test("Verify error message", function () {
    const response = pm.response.json();
    pm.expect(response.error).to.eql('Missing Authorization header.');
});