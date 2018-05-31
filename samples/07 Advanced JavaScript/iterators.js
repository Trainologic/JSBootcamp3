/*getIterator = (data, index = 0) => ({
    next: () => ({
        value: data[index++],
        done: index > data.length
    })
});*/


let myItr = {
    data: 'ssdfsdf'
};

myItr[Symbol.iterator]= function* () {
    let index = 0;
    while (index < this.data.length)
        yield this.data[index++]
};

let evenIt = {
    [Symbol.iterator]: function* () {
        let index = 0;
        let aborted = false;
        while (!aborted) {
            aborted = yield index += 2;
        }
    }
}

/*for (let val of myItr) {
    console.log(val)
}*/

/*for (let val of evenIt) {
    console.log(val)
}*/

function myFunc() {
    // [...arguments].forEach((arg)=>(console.log(arg)));
    // Array(arguments);
    // let args = [].slice(arguments);
    let args = Array.prototype.slice.apply(arguments);
    console.log(...args);
}

myFunc(5,'sdf',6,7686);

// [...myItr].forEach((val)=>(console.log(val)));



