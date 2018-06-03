class ObjectPool {
    constructor(){
        this.set = new Set();
    }

    add(obj){
        this.set.add(obj);
    }

    contains(obj){
        return this.set.has(obj);
    }
}

module.exports = ObjectPool;
