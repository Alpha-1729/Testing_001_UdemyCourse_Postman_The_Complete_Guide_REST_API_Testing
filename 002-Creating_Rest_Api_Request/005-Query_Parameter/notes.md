# Query Parameter

- Getting all products from the category dairy.
  - `GET` <https://simple-grocery-store-api.glitch.me/products?category=dairy>
- Disable query parameters by unchecking the checkbox near the query params key.
- The `KEY` and `VALUE` in query params are case-sensitive.
- You can only use parameters that the API accepts.
  - If a wrong query parameter is given, API will respond without applying it.
- Query parameters are optional in a request.
- `&` separates two query parameters.
  - `GET` <https://simple-grocery-store-api.glitch.me/products?category=dairy&name=cabbage>
