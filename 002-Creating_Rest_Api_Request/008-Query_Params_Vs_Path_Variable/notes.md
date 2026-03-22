# Query Params Vs Path Variable

- **Path Variable** — part of the URL path, used to identify a specific resource.
  - Syntax: `{{baseUrl}}/products/:productId`
  - Cannot be disabled — without it, the path changes completely.
  - Example: `GET /products/123` → fetches product with ID 123.
- **Query Parameter** — appended at the end of the URL after `?`, used for filtering/sorting.
  - Syntax: `{{baseUrl}}/products?category=dairy`
  - Optional in most cases — can be enabled/disabled via checkbox in Postman.
  - Multiple params separated by `&`.
  - Example: `GET /products?category=dairy&available=true`
- **When to use which.**
  - Path Variable → to identify a specific resource.
  - Query Parameter → to filter, sort, or paginate results.
- Refer the `assets/` folder for screenshots.
