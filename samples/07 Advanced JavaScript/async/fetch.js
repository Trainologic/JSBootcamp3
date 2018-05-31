const request = require('request');

function fetch(url, callback) {
    request({url: url}, function (err, result) {
        if (err) {
            return callback(err, null);
        }

        return callback(null, JSON.parse(result.body));
    });
}

module.exports = fetch;