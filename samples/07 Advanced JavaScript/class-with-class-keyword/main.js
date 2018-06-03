class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.z = y;
    }

    print() {
        console.log(this.x + ", " + this.y);
    }
}

const points = [];
for(var i=0; i<5; i++){
    const pt = new Point(5, 10);
    points.push(pt);
}

setTimeout(function(){
    for(var i=0; i<95; i++){
        const pt = new Point(5, 10);
        points.push(pt);
    }
}, 20000)

// const pt1 = new Point(5, 10);
// const pt2 = new Point(10, 20);
//
// pt1.print();
// pt2.print();
