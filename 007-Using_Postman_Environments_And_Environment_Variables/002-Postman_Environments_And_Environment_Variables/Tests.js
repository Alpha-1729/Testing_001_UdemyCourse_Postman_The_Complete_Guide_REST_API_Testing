/*
 * Production Environment — the live server where the application is used by end users.
 *
 * Test Environment — a safe, isolated environment separated from production.
 *   - Used to test code changes without affecting real-world data.
 *
 * Software Workflow — before deploying to production, code goes through stages.
 *   1. localhost   — developer tests locally on their own machine.
 *   2. Test/Staging — tested against a test environment.
 *   3. Production  — deployed to the live server for end users.
 *
 * Testing environment for Simple Grocery API.
 *   Reference Link: https://simple-grocery-store-api-testing.glitch.me
 *
 * Environments in Postman.
 *   - Used to run the same API requests against a different environment (e.g. test vs production).
 *   - Adding a new environment — refer the assets/ folder for GIF.
 *   - Hover over a variable name to check whether it is an Environment or Collection variable.
 *     Refer the assets/ folder for GIF.
 *   - Environment variables take precedence over collection variables.
 *   - Best practice — define variables at the environment level, not the collection level.
 */
