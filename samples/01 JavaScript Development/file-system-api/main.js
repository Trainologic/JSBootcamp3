const fs = require("fs");

fs.readFile("main.js", "utf8", function(err, str){
    console.log(str);
});

// console.log("hello 999");
