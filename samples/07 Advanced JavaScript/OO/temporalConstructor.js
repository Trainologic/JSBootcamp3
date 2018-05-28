function Mammal(name) {
    this.name = name;
    this.saying= 'im groot';
    console.log('Mammal ctor')
}

Mammal.prototype.say= function () {
    console.log(this.name+': '+this.saying);
}

function Cat(name) {
    Mammal.call(this, name);
    console.log('Cat ctor')

    this.saying = 'meow';
}

Cat.prototype.cleanMyself = function () {

};

console.log(Mammal.prototype.cleanMyself);

Function.prototype.extend = (function(){
    var tmp = function () {};
    return function (parent) {
        tmp.prototype = parent.prototype;
        this.prototype = new tmp();
        this.uber = parent.prototype;
    }
})();


Cat.extend(Mammal);
Cat.prototype.say = function () {
    console.log('Im a CATTT');
};

var newCat = new Cat('garfield');
Cat.uber.say();
newCat.say();


//newCat.__proto__ === Cat.prototype= {
// __proto__ :{
//              say: function(){},
//              die: function(){}
//            },
// say: function(){}
// };


newCat.say();

