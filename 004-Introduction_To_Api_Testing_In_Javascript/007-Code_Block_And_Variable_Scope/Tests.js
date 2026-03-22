// A code block is defined using curly braces { }.
// Variables declared with let/const inside a block are block-scoped.
// If no variable is declared inside the block, it uses the one from the outer scope.

let firstName = "Jamie";

{
    // This is a code block.
    let firstName = "Peter"; // block-scoped — does not affect outer firstName
    console.log(firstName); // "Peter"
}

console.log(firstName); // "Jamie"
