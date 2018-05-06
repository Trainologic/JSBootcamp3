let signDate = new Date();
setTimeout(function () {
    let d = new Date();
    console.log('time in seconds: ', d.getSeconds()-signDate.getSeconds());
},0);

let i=0
while (i<100000){
    console.log(i);
    i++;
}