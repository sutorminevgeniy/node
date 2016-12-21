var fs = require('fs');
var content = fs.readFileSync('file.txt');

console.log(decodeURIComponent(content));
console.log('The end');