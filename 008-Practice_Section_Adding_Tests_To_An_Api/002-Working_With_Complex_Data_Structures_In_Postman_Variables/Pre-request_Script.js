// Clear the previous results in console.
console.clear();

const existingBoardIds = pm.collectionVariables.get('existingBoardIds');
console.log(existingBoardIds);

const boardId = existingBoardIds.pop();
pm.collectionVariables.set('boardId', boardId);
pm.collectionVariables.set('existingBoardIds', existingBoardIds);
