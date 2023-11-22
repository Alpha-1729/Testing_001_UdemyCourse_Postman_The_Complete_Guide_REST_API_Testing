// Code block starts with a curly brace.
// If we doesn't declare a variable in the code block, it will use the variable in the global scope.

let firstName = 'Jamie';

{
    // This a code block.
    let firstName = 'Peter';
    console.log(firstName);
}

console.log(firstName);