const {readFile} = require("fs");

main();

function main() {
    const obj = {
        id: 1,
        name: "Ori",
    };

    // const {id, name} = obj;
    const id = obj.id;
    const name = obj.name;

    obj.id = 2;

    console.log(obj.id);
    console.log(id);
}
