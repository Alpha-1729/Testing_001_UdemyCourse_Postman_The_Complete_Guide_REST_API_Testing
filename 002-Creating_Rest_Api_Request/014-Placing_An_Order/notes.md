# Placing An Order

- Place an order.
  - `POST` `{{baseUrl}}/orders`
  - Body:

    ```json
    {
        "cartId": "u3WqNAVryoCMw36k2bRWV",
        "customerName": "Colt Steele"
    }
    ```

  - Add `{{accessToken}}` under `Authorization` → `Bearer Token`.
