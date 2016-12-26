var fs = require('fs');

// var content = fs.readFileSync('file.txt');
// console.log(decodeURIComponent(content));

fs.readFile('file.txt', function (err, content){
  console.log(decodeURIComponent(content));
});

console.log('The end');