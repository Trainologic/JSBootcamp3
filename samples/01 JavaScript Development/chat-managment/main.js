const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const Users = require('./users');

var i=0;
let doctorUsers;
let profUsers;

// IIFE
(function init(){
    doctorUsers = new Users('dr.');
    profUsers = new Users('prof.');

    i++;
    console.log('start ',i);

   /* while(true){
        rl.question('input your selection: ', processInput1);
    }*/
    console.log('finish ');

    main();
})();

function main(){
    doctorUsers.addUser('dfg');
    rl.question('input your selection: ', processInput1);
}

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






































































































