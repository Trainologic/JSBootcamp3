function getData(){
    return [123, "Ori", "ori@gmail.com"];
}

// const data = getData();
// const id = data[0];
// const name = data[1];
// const email = data[2];

const [id, name, ... tail] = getData();
console.log(id, tail);
