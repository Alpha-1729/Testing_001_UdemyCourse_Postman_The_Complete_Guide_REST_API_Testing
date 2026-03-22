/*
 * Important to know.
 *   Workflows only work on automated request runs (Collection Runner, Newman).
 *   Placement of setNextRequest() is not important.
 *     It can be placed in the pre-request script or the script tab.
 *     It will not have any impact on the current request.
 *
 * Get the request name of the current request.
 *   You can get the request name or requestId using postman.
 *   See the attached image.
 */

// Run a request only two times, then halt execution.
// Uses a global variable to track how many times the request has run.
if (pm.globals.get("runnedOnce")) {
    pm.execution.setNextRequest(null);
}

pm.globals.set("runnedOnce", 1);