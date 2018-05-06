var i=0;
var stop = setInterval(function () {
    document.getElementById('myText').innerHTML=new Date();
    if(i>5){
        clearInterval(stop);
    }
    i++;
},1000);

let data = [
    {index:0},
    {index:0},
    {index:0},
    {index:0},
    {index:0},
    {index:0},
    {index:0},
    {index:0},
    {index:0},
    {index:0},
    {index:0},
    {index:0},
    {index:0},
    {index:0},
    {index:0},
    {index:0},
    {index:0},
    {index:0},
];
document.getElementById('myData').innerHTML=JSON.stringify(data);

