function Point(x, y) {
    this.x = x;
    this.y = y;
}

Point.prototype.print = function() {
    console.log(this.x + ", " + this.y);
}

Point.prototype.move = function(dx, dy) {
    this.x += dx;
    this.y += dy;
}

const pt1 = new Point(5, 10);
const pt2 = new Point(10, 20);

console.log(pt1.print == pt2.print);
