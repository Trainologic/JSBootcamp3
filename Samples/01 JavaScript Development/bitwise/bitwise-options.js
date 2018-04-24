var options = [
    'hummus', //1
    'hamutzim', //2
    'salat', //4
    'chips' //8
];

var bitwiseOptions = {};
var pita = 0;

buildOptions();
console.log(bitwiseOptions);
/*
var bitwiseOptions = {
    'hummus': 1,
    'hamutzim': 2,
    'salat': 4,
    'chips': 8
};
*/

function buildOptions() {
    for (var i=0; i<options.length; i++){
        bitwiseOptions[options[i]] = 1 << i;
    }
}


is(pita, 'hummus') // false
is(pita, 'hummus') // true


function is(obj, option) {

}

function set() {

}

// build options
//

//

