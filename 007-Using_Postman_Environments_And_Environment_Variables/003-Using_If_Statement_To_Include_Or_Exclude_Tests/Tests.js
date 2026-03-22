/*
 * Environment cannot be changed from a script — only manually in Postman.
 *
 * Variable types in environment.
 *   - default — visible plain text value.
 *   - secret  — hides the value with dots (used for credentials like accessToken).
 */

// Print the currently active environment name.
// Returns undefined if no environment is selected.
console.log(pm.environment.name);

// Conditionally run a test based on the active environment.
if (pm.environment.name === "Production") {
    pm.test("Status code is 400", () => {
        pm.response.to.have.status(400);
    });
}
