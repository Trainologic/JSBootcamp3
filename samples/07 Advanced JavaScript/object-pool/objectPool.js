const getHashCode = require("./hashCode");

class ObjectPool {
    constructor(){
        this.map = {};
    }

    add(obj){
        const hashCode = getHashCode(obj);
        this.map[hashCode] = obj;
    }

    contains(obj){
        const hashCode = getHashCode(obj);
        return !!this.map[hashCode];
    }
}

module.exports = ObjectPool;
