const fs = require('fs');

//  Синхронное чтение директории
console.log('Reading directory');

const contents = fs.readdirSync(__dirname);

console.log(contents);
//> [ 'core', 'hello', 'readdir.js' ]
console.log('Finished reading');


//  Асинхронное чтение директории
console.log('Reading directory');

fs.readdir(__dirname, (error, contents) => {
  if (error) throw error;

  console.log(contents);
  //> [ 'core', 'hello', 'readdir.js' ]
});

console.log('Finished reading');
