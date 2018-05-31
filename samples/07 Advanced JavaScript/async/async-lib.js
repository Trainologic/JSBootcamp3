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

async.waterfall([
   function (cb) {
        fetch(urls[0], cb);
   },
    function (result, cb) {
        fetch(urls[1], cb);
    },
    function (result, cb) {
        fetch(urls[2], cb);
    }
], function (err, result) {
    console.log(err ? 'Error detected' : 'No Error DetEcteD!' );
    console.log(result);
});

/*
async.mapSeries(urls, fetch, (err, results) => {
    if (err) {
        console.log('error!!!!', err);

        return;
    }

    console.log(results);
});

 */