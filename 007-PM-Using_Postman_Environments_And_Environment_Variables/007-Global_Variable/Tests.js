/*
>>>> Global variables will be available for all requests and collections in a workspace.
>>>> If we have a variable in collection, environment and global level.
		pm.variables.get() will give the environment varible.
>>>> If there is only the variable in the global scope.
		pm.variables.get() will give the global variable
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