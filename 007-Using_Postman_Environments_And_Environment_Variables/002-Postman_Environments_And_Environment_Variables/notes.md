# Postman Environments And Environment Variables

- **Environment** — a set of variables that can be reused across all collections in Postman.
  - Once an environment is selected, all collections use the variables defined in it.
- `baseUrl` for the testing environment.
  - <https://simple-grocery-store-api-testing.glitch.me/>
  - <https://testing.simple-grocery-store-api.click/>
- Set an environment variable via script.
  - `pm.environment.set("variable_key", "variable_value");`
- Get an environment variable via script.
  - `pm.environment.get("variable_key");`
- Always hover over a variable to check whether it is a **collection** or **environment** variable.
- Don't use the same variable name across different collections.
  - Use specific names — e.g. `trelloBaseUrl` instead of `baseUrl`.
- Use environments to switch between different setups (e.g. testing, staging, production) without modifying requests.
