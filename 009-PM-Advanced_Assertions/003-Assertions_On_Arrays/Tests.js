/*
>>>> Reference API.
        GET https://run.mocky.io/v3/afea7a15-1cf2-4d8b-8f76-a7ac8b52088e
>>>> For of
        Reference Link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
>>>> Difference between for...in and for...of
        for...in Loop => iterates over the index in the array.
        for...of Loop => iterates over the object of objects.
>>>>
>>>>
*/

let jsonData = pm.response.json();

let manufacturer;

for (let filter of jsonData.filters) {

    if (manufacturer.name == "MANUFACTURER") {
        manufacturer = filter;
    }
}

console.log(manufacturer);

pm.test("Manufacturer should not be allowed", () => {
    pm.expect(manufacturer.name).to.eql("MANUFACTURER");
    pm.expect(manufacturer.isAllowed).to.be.false;
});
