class A {
    constructor(id) {
    }

    g(){
        console.log("g");
    }

    run(){
        console.log("A.run");
    }
}

class B extends A {
    constructor(){
        super(123);
    }

    f(){
        console.log("f");
    }

    run(){
        super.run();

        console.log("B.run");
    }
}

const b = new B();
doSomething(b);

function doSomething(a){
    a.run();
}
