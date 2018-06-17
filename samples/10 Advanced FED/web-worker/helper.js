function calc() {
    let k = 0;
    for (let i = 0; i < 10000000; i++) {
        for (let j = 0; j < 10; j++) {
            k += j + i;
        }
    }
    return k;
}

