# Using Random Data In Requests

- Create a random full name for placing an order.
  - `POST` `{{baseUrl}}/orders`
  - Body:

    ```json
    {
        "cartId": "u3WqNAVryoCMw36k2bRWV",
        "customerName": "{{$randomFullName}}"
    }
    ```

  - Check the request body in the `Console` to see the generated full name.
- Type `{{$random` in the body to get more random variable suggestions.
