
var longArr = [];
longArr[0]='sdf';
longArr[100]='sdf';
console.log(longArr.length)

var len =longArr.length;
for(var i=0; i<len; i++){
    console.log('try '+i);
}
console.log('try '+i);

function isRunning() {
    console.log('busy....');
    return i<5;
}