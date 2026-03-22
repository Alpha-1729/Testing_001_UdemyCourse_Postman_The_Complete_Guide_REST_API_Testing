// Clear the console before running — keeps output clean.
console.clear();

// Get the current board number from collection variable.
let boardNumber = pm.collectionVariables.get("boardNumber");

// isNaN() — returns true if the value is not a number (e.g. undefined, null, or empty string).
if (isNaN(boardNumber)) {
    boardNumber = 0; // initialize if not set
}

// Increment and save back to the collection variable.
boardNumber++;
pm.collectionVariables.set("boardNumber", boardNumber);
