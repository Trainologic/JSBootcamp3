interface IPoint {
    x: number;
    y: number;
}

/*interface IShape {
    getArea: ()=> number
}*/

class Shape {
    constructor(points: IPoint[]) {

    }

    getArea(): number {
        return 0;
    };


}

class Tri extends Shape {
    constructor(points: IPoint[]) {
        super(points);
        if(points.length!==3){
            //error
        }
    }

    getArea() {
        return 3;
    }
}

class Rec extends Shape {
    constructor(points: IPoint[]) {
        super(points);
    }

    getArea():number {
        return 10;
    }


}

const points: IPoint[] = [];
const shapes: Shape[] = [];
shapes.push(new Tri(points), new Rec(points));

shapes.map(shape =>
    console.log(shape.getArea())
);

