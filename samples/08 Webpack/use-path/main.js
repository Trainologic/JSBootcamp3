const path = require("path");
const fs = require("fs");

const filePath = path.resolve(__dirname, "./contacts.json");
console.log(filePath);

// fs.readFile(filePath, "utf8", function(err, data){
//     console.log(data);
// });
