const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function main(){

}

rl.question('input your selection: ', processInput1);

function processInput1(input){
    console.log('finished 1', input);
    rl.question('input your selection: ', processInput2);
}

function processInput2(input){
    console.log('finished 2', input);
    rl.question('input your selection: ', processInput3);

}
 function processInput3(input){
    console.log('finished 3', input);
}

// callback hell
/*rl.question('input your selection: ', function processInput(input){
    console.log('finished 1', input);
    rl.question('input your selection: ', function processInput(input){
        console.log('finished 2', input);

        rl.question('input your selection: ', function processInput(input){
            console.log('finished 3', input);

        });
    });
});*/





