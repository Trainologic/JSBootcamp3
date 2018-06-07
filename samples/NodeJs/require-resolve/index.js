module.paths.push('./private_modules');
const {Uber} = require('uber');
require('myModule');
 // require('/JSBootcamp/repo/samples/NodeJs/require-resolve/myModule');


new Uber();
console.log(require.cache);
console.log(__dirname);
console.log(__filename);