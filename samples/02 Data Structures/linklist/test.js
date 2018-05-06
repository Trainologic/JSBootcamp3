var {LinkList} = require("./linkList");

test();

function test() {
    try {
        var list = LinkList();

        for (var i = 0; i < 10; i++) {
            list.addLast(i);
        }

        var expected = [0,1,2,3,4,5,6,7,8,9];
        var actual = [];

        var itr = list.iterator();
        while (itr.next()) {
            actual.push(itr.value());
        }

        assertArrayEqual(actual, expected);

        console.log("PASS");
    }
    catch (err) {
        console.log("FAIL: " + err);
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