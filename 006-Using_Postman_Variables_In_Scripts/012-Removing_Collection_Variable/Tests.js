/*
 * Managing collection variables — set, remove single, and remove all.
 * Dummy endpoint for testing: GET postman-echo.com/get
 */

// Set a collection variable.
pm.collectionVariables.set("name", "Jamie");

// Remove a single collection variable.
pm.collectionVariables.unset("name");

// Remove ALL collection variables.
pm.collectionVariables.clear();

// Note: passing an argument to clear() has no effect — it still removes ALL variables.
pm.collectionVariables.clear("name"); // same as pm.collectionVariables.clear()
