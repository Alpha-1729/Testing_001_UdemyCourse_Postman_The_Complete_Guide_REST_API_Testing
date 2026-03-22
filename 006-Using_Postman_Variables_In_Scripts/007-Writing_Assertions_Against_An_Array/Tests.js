/*
>>>>
>>>>
>>>>
>>>>
>>>>
*/

// Test to check whether the created order id is in the orders list.
pm.test("Created order is in the list", function () {
    const response = pm.response.json();
    let isOrderIdInResponse = false;

    for (let i = 0; i < response.length; i++) {
        if (response[i].id === pm.collectionVariables.get('orderId')) {
            isOrderIdInResponse = true;
        }
    }

    pm.expect(isOrderIdInResponse).to.be.true;
});

// Using for each loop.
pm.test("Created order is in the list using for each loop", function () {
    const response = pm.response.json();
    let isOrderIdInResponse = false;

    response.forEach((order) => {
        if (order.id === pm.collectionVariables.get('orderId')) {
            isOrderIdInResponse = true;
        }
    });

    pm.expect(isOrderIdInResponse).to.be.true;
});

// Using find method.
// find method will return the found item in the array.
pm.test("Created order is in the list using find method", function () {
    const response = pm.response.json();
    let order = response.find((order) => order.id === pm.collectionVariables.get('orderId'));
    pm.expect(order).to.be.an('object');
});