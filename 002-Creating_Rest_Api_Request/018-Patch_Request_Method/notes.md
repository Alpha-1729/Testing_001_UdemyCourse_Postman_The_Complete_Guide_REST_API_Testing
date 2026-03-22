# PATCH Request Method

- Get all orders.
  - `GET` `{{baseUrl}}/orders`
- Update an order using `PATCH`.
  - `PATCH` `{{baseUrl}}/orders/:orderId`
  - Add the required changes in the request body.
  - No response body will be returned — check the status code to confirm success.
