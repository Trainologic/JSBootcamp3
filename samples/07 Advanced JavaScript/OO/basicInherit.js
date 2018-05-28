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

Cat.prototype = Mammal.prototype;

// ohhhh!!!
Cat.prototype.cleanMyself = function () {

};

var myCat = new Cat('garfield');
myCat.say();


