"use strict"

class Point {
    constructor(x, y) {
        this._x = x;
        this._y = y;
    }

    // getX(){
    //     return this._x;
    // }

    get x(){
        return this._x;
    }
}

const pt = new Point(5, 10);
// pt._x = 12;

// console.log(pt.getX());
console.log(pt.x);

pt.x = 123;
