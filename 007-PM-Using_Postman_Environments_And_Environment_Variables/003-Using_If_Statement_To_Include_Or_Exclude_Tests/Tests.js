/*
>>>> We cannot change the environment from the script.
>>>> While adding a variable in the environment. There is a type column in the grid.
        It contains two values default and secret.
        Secret option is to just hide the credentials like accessToken in the variable.
        It will be marked with dots.
>>>>
>>>>
>>>>
*/

// Printing the environment name.
// If no environment is selected, it's value will be undefined.
console.log(pm.environment.name);

if (pm.environment.name === 'Production') {
    pm.test('Status code is 400', () => {
        pm.response.to.have.status(400);
    });
}