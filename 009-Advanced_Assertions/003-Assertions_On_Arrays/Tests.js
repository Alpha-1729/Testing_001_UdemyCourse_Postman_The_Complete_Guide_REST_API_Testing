/*
 * Reference API: GET https://5a4a2051f323409288cf3ea108cbfd48.api.mockbin.io/
 *
 * for...in  — iterates over the KEYS (indices/property names) of an object or array.
 * for...of  — iterates over the VALUES of any iterable (array, string, Map, Set, etc.).
 * Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
 *
 * Quick comparison:
 *   const arr = [10, 20, 30];
 *   for (let i in arr)  → "0", "1", "2"     (indexes)
 *   for (let v of arr)  → 10, 20, 30         (values)
 */

pm.test("Manufacturer should not be allowed", () => {
    const jsonData = pm.response.json(); // safe inside pm.test()

    let manufacturer;

    // for...of gives us each filter object (value), not its index.
    for (let filter of jsonData.filters) {
        if (filter.name === "MANUFACTURER") {
            manufacturer = filter;
            break; // stop early once found — no need to keep iterating
        }
    }

    console.log(manufacturer);

    pm.expect(manufacturer.name).to.eql("MANUFACTURER");
    pm.expect(manufacturer.isAllowed).to.be.false;
});
