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

pm.test("Check product Name", function() {
    const response = pm.response.json();
    pm.expect(response.name).to.eql('Starbucks Coffee Variety Pack, 100% Arabica');
});

pm.test("Check product Price", function() {
    const response = pm.response.json();
    pm.expect(response.price).to.eql(40.91);
});

pm.test("Check product is in stock ", function() {
    const response = pm.response.json();
    pm.expect(response.inStock).to.eql(true);
    pm.expect(response.inStock).to.be.true;
});