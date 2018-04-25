var arr = [2, 4, 8, 16];

// Iterate over an array
arr.forEach(function(value) {
    console.log(value);
});

// Iterate over and array and replace current key with returned value
var mappedArray = arr.map(function (value) {
   return value * 2;
});

console.log(mappedArray);  // [4, 8, 16, 32]

// Map implemented with forEach and supporting data structure
var newArr = [];
arr.forEach(function(value) {
    newArr.push(value);
});

console.log(newArr); // [4, 8, 16, 32]