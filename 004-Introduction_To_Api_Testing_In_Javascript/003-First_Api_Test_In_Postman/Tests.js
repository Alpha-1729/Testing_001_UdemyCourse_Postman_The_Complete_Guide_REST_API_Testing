pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});
pm.test("Status should be UP", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.status).to.eql("UP");
});