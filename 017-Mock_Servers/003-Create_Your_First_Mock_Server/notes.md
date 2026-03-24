# Create Your First Mock Server

- In the latest versions of Postman, Enable the mock server in the sidebar.
  - Click the "Services" tab in the sidebar, then expand "Mock Servers".
  - Then the mock server option will be visible in the sidebar.

## Method 1: Create a Mock Server from Scratch

- In the sidebar, click (+) and select "Mock Server".
- Select an existing collection from the dropdown,
  OR choose "Create a new collection" and add requests.
- Configure the mock server details (see configuration section below).
- Click "Create Mock Server".

## Method 2: Create a Mock Server from an API Call

- Send an HTTP request to an API (e.g. <https://postman-echo.com/get>).
- Click "Save" to save the request to a collection.
- In the response pane, click "Save Response".
  - Postman auto-populates the example with the received response.
- In the sidebar, click "View more actions" next to the collection
  and select "More > Mock".
- Give the mock a name and click "Create Mock Server".
- Click "Copy Mock Server URL" and replace the base URL in your request.
- Add your Postman API key as an x-api-key header.
- Click "Send" — Postman returns the saved example response from the mock.

## Method 3: Create a Mock Server from History

- Click the "History" tab in the sidebar.
- Click "View more actions" next to a request → select "Mock Request".
- Configure the mock server details.
- Click "Create Mock Server".

## Configure Mock Server Details

- Mock server name  → Give it a meaningful name.
- Collection        → The collection to be mocked.
- Environment       → (Optional) Select an environment for variables.
- Network delay     → Simulate fixed response delay (e.g. 500ms).
- Save URL as env variable → Auto-saves mock URL into an environment variable.
- Make server private      → Requires x-api-key header in all requests.

## After Creation

- Click "Copy URL" to get the mock server base URL.
- Use it in place of your real API base URL in requests.

## Edit Mock Server Configuration

- Services tab → Mock Servers → Select mock → Click "Edit Configuration".
- You can change: name, environment, delay, privacy, response matching.
- You CANNOT change the collection — create a new mock instead.
- Click "Update Mock Server".

## Request Body & Header Matching (Optional)

- By default, the matching algorithm ignores request body and headers.
- To enable: Edit Configuration → under "Response Matching", select:
  - "Request body"   → matches body of the request to saved examples.
  - "Headers"        → provide comma-separated header keys to match.
- If body matching is enabled, add Content-Type header (e.g. application/json).

## Delete a Mock Server

- Services tab → Mock Servers → "View more actions" → Delete.
