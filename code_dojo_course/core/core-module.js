const path = require('path');

console.log(__filename);
console.log(path.basename(__filename));
//> C:\OpenServer\domains\node\code_dojo_course\core-module.js
//> core-module.js

console.log(__dirname);
console.log(path.basename(__dirname));
//> C:\OpenServer\domains\node\code_dojo_course
//> code_dojo_course

console.log(path.join(__dirname, 'www', 'files', 'upload'));
//> C:\OpenServer\domains\node\code_dojo_course\www\files\upload