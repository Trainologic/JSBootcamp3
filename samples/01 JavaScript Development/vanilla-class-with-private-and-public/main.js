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
        privateDS.push(x);
        privateDS.push(y);
    }

    // public method
    MyClass.prototype.getPrivateDS= function () {
        privateFn();
        return privateDS;
    };

    //private method
    function privateFn() {
        console.log('sdsdf');
    }

    return MyClass;
})();

let myclass = new MyClass(100,200);
console.log(myclass.getPrivateDS());