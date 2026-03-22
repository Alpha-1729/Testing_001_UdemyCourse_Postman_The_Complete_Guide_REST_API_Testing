/*
>>>> Reference API.
        GET https://0ab7dbf0620943deb4e8417a3a91dc94.api.mockbin.io/
>>>> For in
        Reference Link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in
>>>> How to write assertions in Postman (Youtube)
        Reference Link: https://www.youtube.com/watch?v=NEO8RqnfYec
>>>> For in vs For of
        Reference Link: https://bitsofco.de/for-in-vs-for-of/    
>>>>
*/

let jsonData = pm.response.json();

let boardStatus;

for (let key in jsonData.limits) {
    console.log(key, jsonData.limits[key]);

    if (jsonData.limits[key].hasOwnProperty('boards')) {
        boardStatus = jsonData.limits[key].boards.totalPerMember.status;
    }
}

pm.test('Status should be ok', () => {
    pm.expect(boardStatus).to.eql('ok');
});