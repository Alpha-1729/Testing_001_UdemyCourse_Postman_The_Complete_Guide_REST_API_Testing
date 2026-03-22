/*
 * Reference API  : GET https://0ab7dbf0620943deb4e8417a3a91dc94.api.mockbin.io/
 * MDN for...in   : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in
 * for...in vs of : https://bitsofco.de/for-in-vs-for-of/
 * How to write assertions in Postman (Youtube) : https://www.youtube.com/watch?v=NEO8RqnfYec
 */

pm.test("Status should be ok", () => {
	const jsonData = pm.response.json();

	let boardStatus;

	for (let key in jsonData.limits) {
		console.log(key, jsonData.limits[key]);

		if (jsonData.limits[key].hasOwnProperty("boards")) {
			boardStatus = jsonData.limits[key].boards.totalPerMember.status;
		}
	}

	pm.expect(boardStatus).to.eql("ok");
});
