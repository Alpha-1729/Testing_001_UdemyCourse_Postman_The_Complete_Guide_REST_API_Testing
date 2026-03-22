/*
 * equal() — strict reference equality (===), compares if both point to the same object in memory.
 * eql()   — deep equality, compares each property value of the objects.
 */

pm.test("Status should be 200", () => {
    // Custom error message as second argument.
    pm.expect(101).to.equal(101, "must equal 101");

    let a = { name: "John" };
    let b = { name: "Jane" };

    // eql() — compares each property (deep equality).
    pm.expect(a).to.eql(b); // ❌ fails — name values differ

    // equal() — compares object reference, not properties.
    pm.expect(a).to.equal(b); // ❌ fails — different objects in memory

    pm.expect(a).to.not.equal(b); // ✅ passes — different references

    // Null, undefined, and empty checks.
    pm.expect(null).to.be.null;
    pm.expect(undefined).to.be.undefined;
    pm.expect([]).to.be.empty;

    // Array inclusion checks.
    pm.expect([1, 2, 4, 5]).to.include(4);
    pm.expect(2).to.be.oneOf([1, 2, 3, 4, 100]);

    // Regular expression assertion — name should start with "John".
    pm.expect("John").to.match(/^John/);
});
