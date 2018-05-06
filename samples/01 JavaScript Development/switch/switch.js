var foo = 2;

function getValue() {
    switch (foo) {
        case 1:
            console.log('one');
            return 0;
        case 2:
            console.log('two');
        // break;
        case 3:
            console.log('three');
            break;

        default:
            console.log('ah??');
            break;
    }
}

