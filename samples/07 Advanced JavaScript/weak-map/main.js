let wm = new WeakMap();

class MyClass {
    constructor(id){
        this.id = id;
    }
}

wm.set(new Number(1), new MyClass(1));
wm.set(new Number(2), new MyClass(2));

// wm = null;
