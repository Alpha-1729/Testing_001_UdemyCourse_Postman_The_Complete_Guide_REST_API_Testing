/*
>>>> Global variables will be available for all requests and collections in a workspace.
>>>>
>>>>
>>>>
>>>>
*/

// Adding a global variable.
pm.globals.set('firstName', 'Jamie');

// Getting the value of the global variable.
console.log(pm.globals.get('firstName'));

// Remove the global variable.
pm.globals.unset('firstName' );

// Clear all the global variable.
pm.globals.clear();