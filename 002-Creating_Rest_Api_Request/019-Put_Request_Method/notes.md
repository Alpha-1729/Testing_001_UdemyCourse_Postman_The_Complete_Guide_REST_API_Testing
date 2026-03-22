# PUT Request Method

- `PUT` — used to **replace** an existing resource entirely.
- Replace an item in cart.
  - `PUT` `{{baseUrl}}/carts/:cartId/items/:itemId`
  - Body:

    ```json
    {
        "productId": 8739,
        "quantity": 1
    }
    ```

- Difference between `PUT` and `PATCH`.
  - `PUT` — replaces the entire resource.
  - `PATCH` — updates only specific fields of the resource.
- `PUT` is idempotent — calling it multiple times produces the same result.
