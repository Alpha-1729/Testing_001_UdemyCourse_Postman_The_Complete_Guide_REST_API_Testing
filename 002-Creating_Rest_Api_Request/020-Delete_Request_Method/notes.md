# DELETE Request Method

- `DELETE` — used to remove a resource from the server.
- Delete an item in cart.
  - `DELETE` `{{baseUrl}}/carts/:cartId/items/:itemId`
- Delete an order.
  - `DELETE` `{{baseUrl}}/orders/:orderId`
- No request body needed — resource is identified by the URL.
- `DELETE` is idempotent — calling it multiple times has the same result.
- Successful response status codes.
  - `200 OK` — deletion successful with response body.
  - `204 No Content` — deletion successful without response body.
