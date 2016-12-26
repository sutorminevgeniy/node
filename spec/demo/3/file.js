var fs = require('fs');

var file = fs.createReadStream('file.txt');
var newFile = fs.createWriteStream('file-1.txt');

file.pipe(newFile);