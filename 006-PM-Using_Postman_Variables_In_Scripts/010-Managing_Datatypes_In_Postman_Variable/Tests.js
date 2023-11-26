/*
>>>> If we edit the postman collection variable manually, it will be saved as a string.
>>>> Always update postman collection variable through only one method.
        Either through script or manually.
        Don't use both method.
>>>>
>>>>
>>>>
*/

// Getting the datatypes of a postman collection variable.
console.log(typeof postMessage.collectionVariables.get('productId'));