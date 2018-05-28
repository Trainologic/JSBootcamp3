function Mammal() {
    this.saying= 'im groot';
}

Mammal.prototype.say = function () {
    console.log(this.saying);
}

var m = new Mammal();
m.say();