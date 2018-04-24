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

// pita => 9
//pita => 0
pita=set(pita, 'hummus');
console.log("set(pita, 'hummus') => ",pita);
console.log('pita => ',pita);
console.log("is(pita, 'hummus') => ",is(pita, 'hummus'));

// pita => 1
pita=set(pita, 'chips');
console.log("set(pita, 'chips') => ",pita);
console.log('pita => ',pita);
console.log("is(pita, 'chips') => ",is(pita, 'chips'));
console.log("is(pita, 'salat') => ",is(pita, 'salat'));

pita = unset(pita, 'chips');
console.log("unset(pita, 'chips'); pita =>", pita);

function buildOptions() {
    for (var i=0; i<options.length; i++){
        bitwiseOptions[options[i]] = 1 << i;
    }
}

function is(bitwiseValue, option) { // bool
    var bit = bitwiseOptions[option];
    return !!(bitwiseValue & bit);
}


function set(bitwiseValue, option) { // new optionsValue
    return (bitwiseValue | bitwiseOptions[option]);
}

function unset(bitwiseValue, option) {
    return (bitwiseValue ^ bitwiseOptions[option]);
}

