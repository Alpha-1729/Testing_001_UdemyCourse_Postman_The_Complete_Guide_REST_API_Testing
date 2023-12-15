// Clear the previous results in console.
console.clear();

let boardNumber = pm.collectionVariables.get('boardNumber');
if (isNaN(boardNumber)) {
    boardNumber = 0;
}

boardNumber++;

pm.collectionVariables.set('boardNumber', boardNumber);