/*
>>>> How to create a dataset.
        Run same request with different data.
        This can be achieved using the pre-request script variables and workflows.
        Refer the screenshot and the export file.
        Import the file in the postman and view the code in the pre-request script and script.
>>>>
>>>>
>>>>
>>>>
*/

var iterationData = pm.environment.get("iterationData");

if (iterationData && iterationData.length > 0) {
    postman.setNextRequest("Create company");
} else {
    postman.setNextRequest(null);
}



pm.test("Content-Type is present", function () {
    pm.response.to.have.header("Content-Type");
});