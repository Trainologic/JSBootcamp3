test();

function test() {
    try {
        var tree = BTree();

        tree.add(150);
        tree.add(200);
        tree.add(20);
        tree.add(50);
        tree.add(125);
        tree.add(75);
        tree.add(60);
        tree.add(80);

        var itr = tree.search(125);
        assert(itr.value(), 125);

        var expected = [125, 150, 200];
        var actual = [itr.value()];
        while (itr.next()) {
            actual.push(itr.value());
        }

        assertArrayEqual(actual, expected);

        console.log("PASS");
    }
    catch(err){
        console.log("FAIL: " + err.message);
    }
}

function assertArrayEqual(actual, expected){
    if(actual.length != expected.length){
        throw new Error("Actual length " + actual.length + " does not equal expected length " + expected.length)
    }

    for(var i=0; i<actual.length; i++){
        if(actual[i]!=expected[i]){
            throw new Error("Value at index " + i + " does not match " + actual[i] + " vs. " + expected[i]);
        }
    }
}

function assert(message, actual, expected) {
    if (actual != expected) {
        throw new Error(message + ". Expected is " + expected + " actual is " + actual);
    }
}
