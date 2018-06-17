importScripts('helper.js');
onmessage = () => {
    let k = 0;
    for (let j = 0; j < 1000; j++) {
        for (let i = 0; i < 10000000; i++) {
            k += j + i;
        }
        postMessage({done: false, message: Math.round(k/500000400000000)});

    }

    postMessage({done: true, message: k});
}

