const util = require('util');
const fetch = require('./fetch');

const fetchAsync = util.promisify(fetch);

async function fetchSite(url) {
    try {
        const result = await fetchAsync(url);

        console.log('Huston we have a success', result);
    } catch (e) {
        console.log('Huston we have an error', e);
    }
}

fetchSite('https://jsonplaceholder.typicode.com/posts/1');