/*
>>>> Request
        GET {{baseUrl}}/products/:productId
        GET https://simple-grocery-store-api.glitch.me/products/4643
>>>>
>>>>
>>>>
>>>>
*/

pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

pm.test('Response is an object', function() {
    const response = pm.response.json();
    pm.expect(response).to.be.an('object');
});

pm.test("Check product Name", function() {
    const response = pm.response.json();
    pm.expect(response.name).to.be.a('string');
});

pm.test("Check product Price", function() {
    const response = pm.response.json();
    pm.expect(response.price).to.be.a('number');
    pm.expect(response.price).to.be.above(0);
});

pm.test("Check product is in stock ", function() {
    const response = pm.response.json();
    pm.expect(response.inStock).to.eql(true);
    pm.expect(response.inStock).to.be.true;
});