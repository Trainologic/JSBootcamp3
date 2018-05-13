class Timer {
    interval;
    callbacks;
    intervalId;

    constructor(interval){
        this.interval = interval;
        this.callbacks = [];
    }

    tick(callback) {
        this.callbacks.push(callback);
    }

    start() {
        this.intervalId = setInterval(()=>{
            for(const callback of this.callbacks){
                callback();
            }
        }, this.interval);
    }

    stop() {
        if(this.intervalId){
            clearInterval(this.intervalId);
            this.intervalId = undefined;
        }
    }
}