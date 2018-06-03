var obj1 = {};

var obj2 = {
    id: 123,
    name: "Ori",
    id1: 1,
    id2: 2,
    id3: 3,
    id4: 4,
    id5: 5,
};

var obj3 = {
    id: 123,
    name: "Ori",
    id1: 1,
    id2: 2,
    id3: 3,
    id4: 4,
    id5: 5,
};

g(obj1, "id", 123);
g(obj1, "id1", 1);
g(obj1, "id2", 2);
g(obj1, "id3", 3);
g(obj1, "id4", 4);
g(obj1, "id5", 5);
g(obj1, "name", "Ori");

// console.log(sizeof(obj1));

function g(obj, name, value){
    obj[name] = value;
}

class Tag {
}

const t1 = new Tag();
t1.obj1 = obj1;

const t2 = new Tag();
t2.obj2 = obj2;
