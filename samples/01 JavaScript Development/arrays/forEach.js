// forEach implementation. Receives an array and a callback function
function forEach(arr, onFinish) {
    // Iterates over the array
    for (var i = 0; i < arr.length; i++) {
        // Call the callback with the value in key i
        onFinish(arr[i]);
    }
}

// Usage
function callback(num) {
    console.log(num * 2); // multiply values - 2, 4, 6, 8, 10
}

forEach([1, 2, 3, 4, 5], callback);