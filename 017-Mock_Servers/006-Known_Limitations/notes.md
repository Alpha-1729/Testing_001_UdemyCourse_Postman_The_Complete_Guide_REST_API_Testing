# Known Limitations

- Cannot match request body.
  - The mock server ignores the body of the request when matching examples.
- Cannot match query parameters.
  - e.g. GET /api/foo/2/?hidden=true and GET /api/foo/2/?hidden=false
    will both return the same example — the query params are ignored.
- Cannot request a specific response by sending a header.
  - You cannot use a custom header to force the mock to return
    a particular saved example.
- Only one matching example is returned per request.
  - If multiple examples match the same route and method,
    Postman picks the closest match — you cannot control which one is returned.
- How a Postman mock server matches requests to saved examples
  - <https://learning.postman.com/docs/design-apis/mock-apis/matching-algorithm>
- Mock server responses matching request query string params
  - <https://community.postman.com/t/mock-server-responses-matching-request-query-string-params/343>
