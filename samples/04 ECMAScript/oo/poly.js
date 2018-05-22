var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/*interface IShape {
    getArea: ()=> number
}*/
var Shape = /** @class */ (function () {
    function Shape(points) {
    }
    Shape.prototype.getArea = function () {
        return 0;
    };
    ;
    return Shape;
}());
var Tri = /** @class */ (function (_super) {
    __extends(Tri, _super);
    function Tri(points) {
        var _this = _super.call(this, points) || this;
        if (points.length !== 3) {
            //error
        }
        return _this;
    }
    Tri.prototype.getArea = function () {
        return 3;
    };
    return Tri;
}(Shape));
var Rec = /** @class */ (function (_super) {
    __extends(Rec, _super);
    function Rec(points) {
        return _super.call(this, points) || this;
    }
    Rec.prototype.getArea = function () {
        return 10;
    };
    return Rec;
}(Shape));
var points = [];
var shapes = [];
shapes.push(new Tri(points), new Rec(points));
shapes.map(function (shape) {
    return console.log(shape.getArea());
});
