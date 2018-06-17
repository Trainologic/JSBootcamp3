$(document).ready(() => {

    if(window.Worker) {
        $counter = $('.counter');
        $loading = $('.loading');
        const worker = new Worker('worker.js');

        worker.onmessage= (e)=>{
            if(e.data.done) {
                $counter.text(e.data.message);
            }
            else{
                $loading.text('loading: '+e.data.message+'%');
            }
        }

        worker.postMessage(0);
    }
})
