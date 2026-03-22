/*
 * Three ways to check if a created order ID exists in the orders list.
 * Uses for loop, forEach, and Array.find() — each approach achieves the same result.
 */

// Using a for loop.
pm.test("Created order is in the list", function () {
    const response = pm.response.json();
    let isOrderIdInResponse = false;

    for (let i = 0; i < response.length; i++) {
        if (response[i].id === pm.collectionVariables.get("orderId")) {
            isOrderIdInResponse = true;
        }
    }

    pm.expect(isOrderIdInResponse).to.be.true;
});

// Using forEach — cleaner syntax for iterating over arrays.
pm.test("Created order is in the list using forEach", function () {
    const response = pm.response.json();
    let isOrderIdInResponse = false;

    response.forEach((order) => {
        if (order.id === pm.collectionVariables.get("orderId")) {
            isOrderIdInResponse = true;
        }
    });

    pm.expect(isOrderIdInResponse).to.be.true;
});

// Using find — returns the matched item or undefined if not found.
pm.test("Created order is in the list using find", function () {
    const response = pm.response.json();
    const order = response.find((order) => order.id === pm.collectionVariables.get("orderId"));
    pm.expect(order).to.be.an("object");
});
