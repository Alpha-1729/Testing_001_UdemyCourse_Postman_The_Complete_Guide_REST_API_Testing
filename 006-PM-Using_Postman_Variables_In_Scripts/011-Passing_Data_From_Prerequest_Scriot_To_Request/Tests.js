/*
>>>>
>>>>
>>>>
>>>>
>>>>
*/

function getRandomNumber(maxValue) {
    return Math.floor(Math.random() * maxValue);
}

// This collection variable will be used in the body of the request.
pm.collectionVariables.set('randomQuantity', getRandomNumber(14));