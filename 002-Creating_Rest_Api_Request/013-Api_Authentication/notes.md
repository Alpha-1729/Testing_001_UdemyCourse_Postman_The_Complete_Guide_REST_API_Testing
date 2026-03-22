# API Authentication

- Register API client.
  - `POST` `{{baseUrl}}/api-clients`
  - Body:

    ```json
    {
        "clientName": "Postman",
        "clientEmail": "ColteSteele@gmail.com"
    }
    ```

  - Response will return an `accessToken`.
  - Add the `accessToken` in the collection variable `{{accessToken}}`.
- Template of an authorization token.
  - `Bearer accessToken`
  - To see the token sent by Postman → `Console` → `Request Headers` → `Authorization`
- Adding authorization token in a request.
  - Go to `Authorization` tab.
  - Select `Bearer Token` from the `Type` dropdown.
  - Add `{{accessToken}}` in the token field.
