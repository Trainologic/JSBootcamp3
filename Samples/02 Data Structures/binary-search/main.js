test();

function test() {
    try {
        var list = SortedList();

        var existing = {};
        var count = 0;

        while(count < 10000) {
            var value = Math.floor(Math.random() * 10000);
            if (existing[value]) {
                continue;
            }

            existing[value] = true;
            ++count;
            sortedListAdd(list, value);
        }

        assert("Validating collection count", sortedListGetCount(list), 10000);

        var arr = sortedListGetRawArray(list);
        testSearch(list, arr[0]);
        testSearch(list, arr[arr.length-1]);
        testSearch(list, arr[Math.floor(arr.length/2)]);
        testSearch(list, arr[Math.floor(arr.length/2-1)]);
        testSearch(list, arr[Math.floor(arr.length/2+1)]);
        testSearch(list, 999);

        console.log("PASS");
    }
    catch (err) {
        console.log("FAIL: " + err.message);
    }
}

function testSearch(list, valueToFind) {
    var actualIndex = sortedListSearch(list, valueToFind);
    var arr = sortedListGetRawArray(list);
    var expectedIndex = arr.indexOf(valueToFind);
    assert("Validating search", actualIndex, expectedIndex);
}

function assert(message, actual, expected) {
    if (actual != expected) {
        throw new Error(message + ". Expected is " + expected + " actual is " + actual);
    }
}

function SortedList(){
    return {
        arr: []
    };
}

function sortedListAdd(list, val) {
    list.arr.push(val);
}

function sortedListGetCount(list){
    return list.arr.length;
}

function sortedListSearch(list, val){
    var arr = list.arr;

    arr.sort(function(a,b){return a-b;});

    var begin = 0;
    var end = arr.length;

    while(true) {
        if(end <= begin) {
            return -1;
        }

        var index = Math.floor(begin + (end - begin) / 2);
        var actual = arr[index];

        if (actual == val) {
            return index;
        }
        else if (actual > val) {
            end = index;
        }
        else {
            begin = index + 1;
        }
    }

    return -1;
}

function sortedListGetRawArray(list){
    return list.arr;
}
