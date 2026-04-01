/*
 * Writes content to a file on disk using the Node.js fs module.
 * Run: node write_to_disk.js
 * Install Newman: npm i newman
*/

const fs = require('fs');

fs.writeFile('foo.txt', 'bar', function (error) {
    if (error) {
        console.log(error);
    }
});


// Running newman as a node JS module.
var newman = require('newman');

newman.run({
    collection: require('./postman_collection.json'),
    reporters: 'cli'
}, function (err) {
    if (err) { throw err; }
    console.log('collection run complete!');
});


// This will write the request body to a file before each request
newman.run({
    collection: require('./postman_collection.json'),
    reporters: 'cli'
}).on('beforeRequest', function (err, args) { // on start of run, log to console
    if (err) {
        console.error(err);
    } else {
        let fileName = Date.now() + '-request.txt';
        fs.writeFile(fileName, args.request.body.raw, function (error) {
            if (error) {
                console.error(error);
            }
        });
    }
}).on('request', function (err, args) {
    if (err) {
        console.error(err);
    } else {
        let fileName = Date.now() + '-response.txt';
        fs.writeFile(fileName, args.response.stream, function (error) {
            if (error) {
                console.error(error);
            }
        });
    }
});