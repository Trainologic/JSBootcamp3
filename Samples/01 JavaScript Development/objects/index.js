var myObject = {
    keyA: 'String',
    keyB: true,
    keyC: {}
};

myObject['keyD'] = null;

for(var key in myObject) {
    console.log(myObject[key]);
}