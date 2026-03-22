/*
>>>> In this we are deleting all boards.
        For this, we first grab all the boardIds in a collection variable existingBoardIds.
        In DeleteBoard Pre-Request script, we set the boardToDelete as the first element from the existingBoardIds.
>>>>
>>>>
>>>>
>>>>
*/

const response = pm.response.json();
pm.collectionVariables.set('boardId', response[0].id);
const existingBoardIds = response.map(board => board.id);
pm.collectionVariables.set('existingBoardIds', existingBoardIds);