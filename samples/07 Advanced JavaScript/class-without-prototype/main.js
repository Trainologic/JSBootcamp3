"use strict"

const points = [];

class Tag {
}

document.querySelector("button").addEventListener("click", function(){
    const pt = Point(Math.random()*100, Math.random()*100);
    pt.tag = new Tag();
    points.push(pt);
});

function Point(x, y){
    function print(){
        console.log(x + ", " + y);
    }

    function move(dx, dy){
        x+=dx;
        y+=dy;
    }

    return {
        print,
        move,
    };
}

var pt1 = Point(5, 10);
var pt2 = Point(10, 20);

var tag1 = new Tag();
tag1.pt1 = pt1;

var tag2 = new Tag();
tag2.pt2 = pt2;
