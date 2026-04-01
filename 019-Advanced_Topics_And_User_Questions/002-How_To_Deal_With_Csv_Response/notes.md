# How To Deal With Csv Response

- Papa Parse -> JavaScript library that can do CSV parsing.
  - Reference Link: <https://www.papaparse.com/>
- Collection used in the video.
  - Reference Link: <https://www.postman.com/collections/436282f92e22d4319c43>
- Steps in the video.
  - Uses **PapaParse** library dynamically loaded via a GET request and stored in a Postman global variable
  - **Request 1 (Setup):** Fetches the PapaParse minified JS from GitHub and saves it as `PapaLibrary` global
  - **Request 2 (Solution):** Retrieves `PapaLibrary` using `eval()`, configures the parser with `header: true`, and parses the CSV response
  - Loops through each parsed invoice row and asserts that `ResHash === 'ABC1234'` has an `InvTotal` of `$3,500.00`
  - After all tests complete, the `PapaLibrary` global variable is removed using `pm.globals.unset()` to keep the environment clean
