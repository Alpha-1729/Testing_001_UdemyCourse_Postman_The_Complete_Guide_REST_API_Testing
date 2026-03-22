/*
 * Request
 *   GET {{baseUrl}}/products/:productId
 *   GET https://simple-grocery-store-api.glitch.me/products/4643
 */

pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

pm.test("Response is an object", function () {
    const response = pm.response.json();
    pm.expect(response).to.be.an("object");
});

pm.test("Check product name", function () {
    const response = pm.response.json();
    pm.expect(response.name).to.be.a("string"); // checks type, not exact value
});

pm.test("Check product price", function () {
    const response = pm.response.json();
    pm.expect(response.price).to.be.a("number"); // checks type
    pm.expect(response.price).to.be.above(0);    // checks value is greater than 0
});

pm.test("Check product is in stock", function () {
    const response = pm.response.json();
    pm.expect(response.inStock).to.eql(true);  // checks value equality
    pm.expect(response.inStock).to.be.true;    // checks strictly boolean true
});
