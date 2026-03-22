/*
 * Always select an environment before running requests.
 * Without a selected environment, environment variable operations may give unpredictable results.
 */

// Set an environment variable.
pm.environment.set("firstName", "Jamie");

// Get an environment variable.
console.log(pm.environment.get("firstName")); // "Jamie"

// Remove a single environment variable.
pm.environment.unset("firstName");

// Clear all environment variables.
pm.environment.clear();
