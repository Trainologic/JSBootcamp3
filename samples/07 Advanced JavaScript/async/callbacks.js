const request = require('request');
const async = require('async');

function fetch(url, callback) {
    request({url: url}, function (err, result) {
        if (err) {
            return callback(err, null);
        }

        return callback(null, JSON.parse(result.body));
    });
}

const urls = [
    'https://jsonplaceholder.typicode.com/posts/1',
    'https://jsonplaceholder.typicode.com/posts/2',
    'https://jsonplaceholder.typicode.com/posts/3'
];

fetch(urls[0], function (err, result) {
    if (err) {
        throw new Error(err);
    }

    fetch(urls[1], function (err, result) {
        if (err) {
            throw new Error(err);
        }

        fetch(urls[2], function (err, result) {
            if (err) {
                throw new Error(err);
            }
        });
    });
});