$(document).ready(() => {

    if(window.Worker) {
        $counter = $('.counter');
        const worker = new Worker('worker.js');

        worker.onmessage= (e)=>{
            $counter.text(e.data);
        }

        worker.postMessage(0);
    }
})
