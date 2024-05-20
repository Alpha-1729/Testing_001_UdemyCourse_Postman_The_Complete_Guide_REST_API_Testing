/*
>>>> In a postman collection runner, all the request are executed in a sequence order.
>>>> You can change the sequence using the builtin function.
        postman.setNextRequest("Next Request Name");
        This will execute the next request, after the current request is done.
>>>> How to stop the collection run after running the current request.
        postman.setNextRequest(Null);
>>>> How to create an endless loop in collection runner.
        Request 1
        Request 2  -> Didn't specify any condition here.
        Request 3  -> Go to Request 2
        Request 4

        The loop will be like
        Req 1 -> Req 2 -> Req 3 -> Req 2 -> Req 3 -> Req 2......

        If we end request execution using the postman using postman.setNextRequest(Null); Then postman will execute all the requests under the current request in sequence order.
>>>>
*/