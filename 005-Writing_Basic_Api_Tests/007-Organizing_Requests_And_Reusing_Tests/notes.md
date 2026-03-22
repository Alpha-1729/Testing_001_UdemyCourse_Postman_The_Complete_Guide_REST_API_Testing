# Organizing Requests And Reusing Tests

- Tests can be written at the **collection level** or **folder level**.
  - All tests at the collection/folder level will run automatically for every request under that collection/folder.
  - Refer the `assets/` folder for GIF.
- This avoids duplicating the same test (e.g. status code check) across every request.
- Execution order — collection level → folder level → request level.
- Request-level tests run **after** collection and folder level tests.
