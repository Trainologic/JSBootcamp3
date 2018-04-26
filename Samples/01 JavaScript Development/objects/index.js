var myObject = {
    keyA: 'String',
    keyB: true,
    keyC: {}
};

var objKey = 'keyD';
myObject[objKey] = null;

for(var key in myObject) {
    console.log(key);
}

// delete keyA
delete myObject['keyA'];