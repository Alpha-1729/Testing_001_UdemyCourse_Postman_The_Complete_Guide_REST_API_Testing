/*
 * Get all boards and store their IDs in a collection variable.
 * boardId        — stores the first board's ID.
 * existingBoardIds — stores all board IDs as an array (used in DeleteBoard pre-request script).
 *
 * In DeleteBoard Pre-Request script:
 *   - Read existingBoardIds from collection variable.
 *   - Set boardToDelete as the first element from existingBoardIds.
 */

const response = pm.response.json();

// Store the first board ID.
pm.collectionVariables.set("boardId", response[0].id);

// Extract all board IDs using map() and store as a collection variable.
const existingBoardIds = response.map((board) => board.id);
pm.collectionVariables.set("existingBoardIds", existingBoardIds);
