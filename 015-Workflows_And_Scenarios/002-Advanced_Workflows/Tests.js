/*
>>>> Important to know.
        Workflows only work on automated request runs (Collection runner, Newman)
        Placement of the setNextRequest() is not important.
            You can place setNextRequest() in pre-request script or script.
            It will not have any impact on the current request.
            This can be added at anywhere in the script.
>>>> Get the request name of the current request.
        You can also get the request name or the requestId using postman.
        See the attached image.
>>>>
>>>>
>>>>
*/

// How to run a request only two times.
// After 2 times, halt the execution.
// Create a global variable to track the count of how many times the request had run.
if(postMessage.globals.get("runnedOnce"))
{
    postman.setNextRequest(null);
}

pm.globals.set("runnedOnce", 1);