console.log()
const resource= {
    posts: {
        title: 'posts',
        urls:[
            'http://localhost:63342/service-worker/index.html?_ijt=t65fr4ij96g93fk3qqkper15as',
            'https://jsonplaceholder.typicode.com/posts'
        ]
    }
}

function cacheData(e){
    const {title, urls} = resource.posts;
    return caches.open(title)
        .then((cache)=>{
            return cache.addAll(urls);
        })
}

function fromCache(e){
    return caches.match(e.request)
        .then(data=>{
            return (data && !navigator.onLine)? data: fetch(e.request);
        });
}

addEventListener('install', (e)=>{
    console.log('service worker: install');
    e.waitUntil(cacheData());
});

addEventListener('fetch', (fetchEvent)=>{
    fetchEvent.respondWith(fromCache(fetchEvent));
});