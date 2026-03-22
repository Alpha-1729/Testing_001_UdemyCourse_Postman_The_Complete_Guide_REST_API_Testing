/*
 * Postman collection variables are always stored as strings internally.
 * Manually editing a variable in the Variables tab saves it as a string.
 * Always update collection variables using only one method — script OR manual, not both.
 */

// Check the data type of a collection variable.
console.log(typeof pm.collectionVariables.get("productId")); // "string"

// Setting an object as a collection variable.
// Objects are automatically converted to a string — "[object Object]".
// The actual object structure is NOT visible in the Variables tab.
pm.collectionVariables.set("employee", { name: "John" });

// To store and retrieve an object correctly, use JSON.stringify() and JSON.parse().
pm.collectionVariables.set("employee", JSON.stringify({ name: "John" }));
const employee = JSON.parse(pm.collectionVariables.get("employee"));
console.log(employee.name); // "John"
