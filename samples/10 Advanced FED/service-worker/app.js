window.addEventListener('load', ()=>{
    navigator.serviceWorker.register('service.js')
        .then(registration=>{
            console.log('service worker registration done. ', registration);
        },e=> console.log(e))

});

document.addEventListener("DOMContentLoaded", function(event) {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res=> res.json())
        .then(data=>console.log(data));
});
