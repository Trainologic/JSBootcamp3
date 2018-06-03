function g(desc){
    console.log(desc, this);
}

var obj = {
    id: 123,
    g: g,
}

g("g()");

obj.g("obj.g()");

var g = obj.g;
g("g = obj.g");

new g("new g()");

document.querySelector("button").addEventListener("click", g);

g.apply("Udi", []);

g.call("Roni");

const f = g.bind("Ori");
f();
