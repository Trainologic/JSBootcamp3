var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({__proto__: []} instanceof Array && function (d, b) {
            d.__proto__ = b;
        }) ||
        function (d, b) {
            for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
    return function (d, b) {
        extendStatics(d, b);

        function __() {
            this.constructor = d;
        }

        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Mammal = /** @class */ (function () {
    function Mammal(name) {
        this.saying = 'nothing';
        this.name = name;
    }

    Mammal.prototype.say = function () {
        console.log(this.name + ': ' + this.saying);
    };
    return Mammal;
}());
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);

    function Cat(name) {
        var _this = _super.call(this, name) || this;
        _this.saying = 'hatula';
        _this.numberOfLifes = 9;
        return _this;
    }

    Cat.prototype.say = function () {
        _super.prototype.say.call(this);
        console.log('lifes: ' + this.numberOfLifes);
    };
    return Cat;
}(Mammal));
var myMammal = new Mammal('tiger');
var myCat = new Cat('garfield');
myMammal.say();
myCat.say();
