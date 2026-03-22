# Trello API Documentation

- Trello API Introduction.
  - <https://developer.atlassian.com/cloud/trello/guides/rest-api/api-introduction/>
- Generate Trello API key and Token.
  - Go to <https://trello.com/app-key>
  - Click on `Go to the Power-Up Admin Portal`.
  - Click on `New` → fill all details → click `Create`.
  - Click on `Generate a new API key`.
  - To generate the token → click the `Token` link on the right side of the API key.
  - Copy the token.
  - Set `apiKey` and `token` as collection variables in Postman.
- Trello API documentation.
  - <https://developer.atlassian.com/cloud/trello/rest/>
- API base URL.
  - `https://api.trello.com`
- Notation for a path variable in API.
  - `GET {{baseUrl}}/1/boards/{id}` — curly braces notation.
  - `GET {{baseUrl}}/1/boards/:id` — colon notation.
