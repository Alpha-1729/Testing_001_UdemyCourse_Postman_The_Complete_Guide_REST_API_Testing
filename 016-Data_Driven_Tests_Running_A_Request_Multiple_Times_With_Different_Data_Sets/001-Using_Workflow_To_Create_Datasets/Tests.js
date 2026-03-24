/*
 * How to create a dataset.
 *   Run the same request with different data.
 *   This can be achieved using pre-request script variables and workflows.
 *   Refer the screenshot and the export file.
 *   Import the file in Postman and view the code in the pre-request script and script.
 */

var companies = pm.environment.get("companies");

if (companies && companies.length > 0) {
    postman.setNextRequest("Create company");
} else {
    postman.setNextRequest(null);
}

pm.test("Content-Type is present", function () {
    pm.response.to.have.header("Content-Type");
});