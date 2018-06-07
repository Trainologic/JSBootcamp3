const EventEmitter = require('events');
const events = new EventEmitter();


const fn1 = ()=>{
    console.log('11');
    events.removeListener('data', fn2);
}

const fn2 = ()=>{
    console.log('22');
}

events.on('data', fn1)
events.on('data', fn2)

console.log('before');
events.emit('data');
/*const listeners = [fn1, fn2];
for(let listener of listeners){
    listener()
}*/

console.log('after');
events.emit('data');




