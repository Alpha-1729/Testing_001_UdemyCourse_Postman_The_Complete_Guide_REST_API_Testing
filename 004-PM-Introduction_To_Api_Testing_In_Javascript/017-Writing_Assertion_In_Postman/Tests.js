const response = pm.response.json();

pm.test('Status is to be UP', () => {
    pm.expect(response.status).to.eql('UP');
});

console.log(response.status);