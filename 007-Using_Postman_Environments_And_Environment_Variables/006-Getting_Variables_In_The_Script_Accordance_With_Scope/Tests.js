/*
 * pm.variables.get() — resolves a variable by scope precedence.
 * Scope order (highest to lowest): environment → collection → global
 * If the same variable exists in both environment and collection, environment value is returned.
 */

// Returns the environment variable if it exists, otherwise falls back to collection variable.
console.log(pm.variables.get("baseUrl"));

// Best practice — always store variables at the environment level.
pm.environment.set("productId", 4632);
