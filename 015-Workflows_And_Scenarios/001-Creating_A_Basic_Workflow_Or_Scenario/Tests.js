/*
 * In a Postman collection runner, all requests are executed in sequential order.
 *
 * Change the sequence using the built-in function.
 *   postman.setNextRequest("Next Request Name");
 *   This will execute the specified request after the current request is done.
 *
 * Stop the collection run after the current request.
 *   postman.setNextRequest(null);
 *
 * How to create an endless loop in the collection runner.
 *   Request 1
 *   Request 2  -> No condition specified.
 *   Request 3  -> Go to Request 2.
 *   Request 4
 *
 *   The loop will be:
 *   Req 1 -> Req 2 -> Req 3 -> Req 2 -> Req 3 -> Req 2 ......
 *
 *   If we end request execution using postman.setNextRequest(null),
 *   Postman will execute all remaining requests in sequence order.
 *
 * ⚠️ In the newer version of Postman, setNextRequest() is deprecated.
 *    Use the below command instead.
 *    pm.execution.setNextRequest("Request Name");
 */