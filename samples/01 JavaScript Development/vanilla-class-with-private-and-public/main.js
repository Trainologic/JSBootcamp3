/*function privateClass() {
    var users = [];

    this.f = f;

    function f() {
        users.push()
    }
}*/

let MyClass = (function () { // IIFE
    // private property
    var privateDS = ['privateItem'];

    //constructor
    function MyClass(x, y) {
        var privateNonStatic = 'sdf';
        this.x ='asd';
    }

    // public method
    MyClass.prototype.getPrivateDS= function () {
        privateFn();
        this.x;
    };

    //private method
    function privateFn() {
        console.log('sdsdf');
    }

    return MyClass;
})();

let myclass = new MyClass(100,200);
let myclass2 = new MyClass(100,200);

console.log(myclass.getPrivateDS() === myclass2.getPrivateDS());