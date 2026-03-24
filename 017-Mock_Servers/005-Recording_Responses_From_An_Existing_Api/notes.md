# Recording Responses From An Existing API

- If we have an existing API (e.g. Star Wars API — <https://swapi.dev/api/people/1/>),
  send a GET request to it and verify the response looks correct.
- Save the request to a collection first — click "Save" and choose a collection.
- In the response pane, click "Save Response" → "Save as Example".
  - Optionally rename the example (e.g. "Get Person 1").
  - The request method, URL, and status code are all saved as part of the example.
- Repeat for other endpoints/responses you want to mock
  (e.g. /people/2/, /planets/1/) — each saved as a separate example.
- Once all examples are saved, create a mock server from the collection:
  - Click the three dots (···) next to the collection → "Mock Collection".
  - Give it a name and click "Create Mock Server".
  - Copy the mock server URL and use it as the base URL in your requests
    instead of the real API URL.
