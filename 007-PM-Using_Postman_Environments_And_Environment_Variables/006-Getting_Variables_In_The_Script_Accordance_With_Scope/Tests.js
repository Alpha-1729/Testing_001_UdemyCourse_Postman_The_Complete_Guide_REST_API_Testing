/*
>>>>
>>>>
>>>>
>>>>
>>>>
*/

// If environment variable and collection variable exists, it will return the environment variable.
// Here we get the variable based on the scope. (Environment first then collection variable.)
console.log(pm.variable.get('baseUrl'));

// Always use environment variable for storing the variable.
pm.environment.set('productId', 4632);