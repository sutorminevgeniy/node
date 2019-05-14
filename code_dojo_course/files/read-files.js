const fs = require('fs');

// fs.readFile('note.md', (error, data) => {
fs.readFile('note.md', 'utf-8' ,(error, data) => {
  if (error) throw error;

  console.log(data.toString());
});

// Вытаскивает значение из командной строки по флагу
function getValue(flag) {
  const index = process.argv.indexOf(flag);
  return (index > -1) ? process.argv[index + 1] : null;
}

const filename = getValue('-f');

fs.readFile(filename, 'utf-8', (error, data) => {
  if(error) return console.log('Такого файла нет!');

  console.log(data)
});