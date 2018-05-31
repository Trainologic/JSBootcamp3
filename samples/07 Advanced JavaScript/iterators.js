let it = getIterator(['hey','ho','lets go']);
// next() => {value:any, done: bool}
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().done);
