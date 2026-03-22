/*
 * Generate a random number and store it as a collection variable.
 * Used to pass a dynamic value (e.g. quantity) into the request body.
 */

function getRandomNumber(maxValue) {
    return Math.floor(Math.random() * maxValue); // returns a random integer between 0 and maxValue - 1
}

// Set the collection variable — used in the request body as {{randomQuantity}}.
pm.collectionVariables.set("randomQuantity", getRandomNumber(14)); // random number between 0 and 13
