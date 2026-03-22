/*
 * Avoid calling pm.response.json() outside of pm.test() blocks.
 * If the response has no JSON body, it throws an error and stops all remaining tests from running.
 *
 * ❌ Bad — if no JSON body, all tests below this line are skipped.
 * const response = pm.response.json();
 *
 * ✅ Good — each test handles its own response parsing safely.
 * pm.test("Check something", function () {
 *   const response = pm.response.json();
 *   pm.expect(response.id).to.be.a("string");
 * });
 *
 * Refer the assets/ folder for reference image.
 */
