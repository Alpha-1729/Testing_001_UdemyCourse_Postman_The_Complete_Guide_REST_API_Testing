/*
>>>> Reference API.
        GET https://run.mocky.io/v3/673be5a5-5211-4ba1-9287-6c3716e940bc
>>>> For in
        Reference Link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in
>>>> How to write assertions in Postman (Youtube)
        Reference Link: https://www.youtube.com/watch?v=NEO8RqnfYec
>>>>    
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