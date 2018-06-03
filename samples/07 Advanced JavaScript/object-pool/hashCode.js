const MAGIC_FIELD = "###_ori_is_the_###";
let nextCode = 1;

function getHashCode(obj){
    let hashCode = obj[MAGIC_FIELD];
    if(!hashCode){
        hashCode = obj[MAGIC_FIELD] = nextCode++;
    }

    return hashCode;
}

module.exports = getHashCode;
