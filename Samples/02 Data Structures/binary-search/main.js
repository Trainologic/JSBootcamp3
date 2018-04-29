main();

function main() {
    try {
        var list = SortedList();

        for (var i = 0; i < 10000; i++) {
            var value = Math.floor(Math.random() * 10000);
            add(list, value);
        }

        assert("Validating collection count", sortedListGetCount(list), 10000);

        var valueToFind = 999;
        var actualIndex = sortedListSearch(list, valueToFind);
        var arr = sortedListGetRawArray(list);
        var expectedIndex = arr.indexOf(valueToFind);
        assert("Validating search", actualIndex, expectedIndex);

        console.log("PASS");
    }
    catch (err) {
        console.log("FAIL: " + err.message);
    }
}

function assert(message, actual, expected) {
    if (actual != expected) {
        throw new Error(message);
    }
}
