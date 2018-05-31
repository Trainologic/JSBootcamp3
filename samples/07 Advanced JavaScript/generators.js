/*function* getIterator(data, index = 0) {
    yield data[0];
    yield data[1];
    yield data[2];
}*/

function* getIterator(data, index = 0) {
    let keys = Object.keys(data);
    while (index < keys.length) {
        yield data[keys[index++]];
    }
}

function* getUsers() {
    yield fetchUsers();
    yield dispatch(usersAction);
}

function* getUserInput(data) {
    let user = {};
    for (let key in data) {
        console.log(data[key]);
        // readline ==>  user[key] = input;
        yield user;
    }
}

function* evenGen() {
    let index = 0;
    while (true) {
        let reset = yield index;
        index+=2;
        if(reset){
            index =0;
        }
    }
}

let evenIt = evenGen();
console.log(evenIt.next().value);
console.log(evenIt.next().value);
console.log(evenIt.next().value);
console.log(evenIt.next(true).value);
console.log(evenIt.next().value);

/*let userIput = getUserInput({
    username: 'input username:',
    age: 'input age:'
});

for (let userInputPart of userIput) {
    userInputPart.next();
}*/

let it = getIterator({hey: 'hey', ho: 'ho', lets: 'lets go'});
// next() => {value:any, done: bool}
/*console.log(it.next().value);
console.log(it.next().value);
console.log({done, value}=it.next());
console.log(it.next().value);
console.log(it.next().done);*/

for (let value of it) {
    console.log(value);
}


// getIterator(['hey', 'ho', 'lets go']).foreach((msg)=>console.log(msg));

