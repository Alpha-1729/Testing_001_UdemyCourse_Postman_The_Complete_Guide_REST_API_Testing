/*
>>>> If you don't select any environment, you may get unpredictable results.
>>>>
>>>>
>>>>
>>>>
*/

// Adding an environment variable.
pm.environment.set('firstName', 'Jamie');

// Getting the value of the environment variable.
console.log(pm.environment.get('firstName'));

// Remove the environment variable.
pm.environment.unset('firstName' );

// Clear all the environment variable.
pm.environment.clear();