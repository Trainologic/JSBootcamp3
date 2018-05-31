const Promise = require('bluebird');

let fetch = require('./fetch');
fetch = Promise.promisifyAll({fetch});

const urls = [
    'https://jsonplaceholder.typicode.com/posts/1',
    'https://jsonplaceholder.typicode.com/posts/2',
    'https://jsonplaceholder.typicode.com/posts/3'
];

Promise.resolve(urls).map((url)=> {
    return fetch.fetchAsync(url);
}).then((result) => console.log(result));

/*
function fetch(url) {
    return new Promise((resolve, reject) => {
        request({url: url}, function (err, result) {
            if (err) {
                return reject(err);
            }

            return resolve(JSON.parse(result.body));
        });
    });
}

fetch('https://jsonplaceholder.typicode.com/posts/1').then((result) => {
    console.log(result);
}).catch((e) => {
    console.log('An error has been triggered', e);
});

const fetchAsync = util.promisify(fetchCallbacked);

fetchAsync('https://jsonplaceholder.typicode.com/posts/1').then((result) => {
   console.log(result);
});
*/
