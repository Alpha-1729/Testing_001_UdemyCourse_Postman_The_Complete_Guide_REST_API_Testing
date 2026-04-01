# Reusing Tests In Mulitple Requests

- This script retrieves the "commonTests" function stored as a string in the Postman environment.
- The `eval()` method converts the string back into an executable function.
- It is immediately invoked to run all the shared test assertions for this request.
- This approach eliminates the need to duplicate test code across multiple requests.
- Any changes to the common tests only need to be made in one place (`pre_request.js`).
