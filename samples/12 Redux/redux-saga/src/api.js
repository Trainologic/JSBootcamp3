const base = 'https://jsonplaceholder.typicode.com';
export function getApi(url){
    return fetch(base+url)
        .then(d=>d.json());
}