/*
 * Global variables — available across all requests and collections in a workspace.
 *
 * pm.variables.get() scope resolution order (highest → lowest precedence).
 *   1. Environment variable
 *   2. Collection variable
 *   3. Global variable
 *
 * If the same variable exists in environment, collection, and global —
 *   pm.variables.get() returns the environment variable.
 * If the variable exists only in global scope —
 *   pm.variables.get() returns the global variable.
 */

// Set a global variable.
pm.globals.set("firstName", "Jamie");

// Get a global variable.
console.log(pm.globals.get("firstName")); // "Jamie"

// Remove a single global variable.
pm.globals.unset("firstName");

// Clear all global variables.
pm.globals.clear();
