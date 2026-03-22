// Clear the console before running — keeps output clean.
console.clear();

// Retrieve the existing board IDs array from collection variable.
const existingBoardIds = pm.collectionVariables.get("existingBoardIds");
console.log(existingBoardIds);

// pop() — removes and returns the last element from the array.
const boardId = existingBoardIds.pop();

// Update collection variables — boardId to delete, and the remaining board IDs.
pm.collectionVariables.set("boardId", boardId);
pm.collectionVariables.set("existingBoardIds", existingBoardIds);
