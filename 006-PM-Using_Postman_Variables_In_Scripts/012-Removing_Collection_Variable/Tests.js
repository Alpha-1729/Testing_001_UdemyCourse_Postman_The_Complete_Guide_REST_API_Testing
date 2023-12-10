/*
>>>> Dummy end point from postman.
        GET postman-echo.com/get
>>>>
>>>>
>>>>
>>>>
*/

// Remove a single collection variable.
pm.collectionVariables.set('name', 'Jamie');
pm.collectionVariables.unset('name');

// Remove all collection variables.
pm.collectionVariables.clear(); 