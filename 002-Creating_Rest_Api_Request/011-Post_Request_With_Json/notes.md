# POST Request With JSON

- Add an item to cart.
  - `POST` `{{baseUrl}}/carts/:cartId/items`
  - Body:

    ```json
    {
        "productId": 4646
    }
    ```

- Always choose `JSON` in the `Body` tab when sending a POST request with a body.
- Format JSON in Postman.
  - `Alt + Shift + F`
  - Or click the `Beautify` button on the right middle portion.
