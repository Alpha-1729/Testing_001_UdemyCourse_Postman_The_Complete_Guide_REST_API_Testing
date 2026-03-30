/*
 *
 *
 *
 *
 */

pm.test("Upload Successful", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.status).to.eql("success");
    pm.expect(jsonData.file).to.eql("file1.txt");
});