// currying
function calc(operation) {
    return function (a, b) {
        switch (operation) {
            case 'plus':
                return a + b;
        }
    }
}

// es6
calc = (operation) => (a, b) =>{
    switch (operation) {
        case 'plus':
            return a + b;
    }
};

let res = calc('plus')(2,3);
let plus = calc('plus')
plus(2, 3);
console.log(res);