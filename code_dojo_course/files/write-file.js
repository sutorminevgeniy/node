const fs = require('fs');

// Запись файла. Файл перезаписывается.
fs.writeFile('note.txt', 'Hello Node.js', error => {
  if (error) throw error;

  console.log('File created');
});

// Запись файла. Файл дописывается в конец.
fs.appendFile('note.txt', '!!!', error => {
  if (error) throw error;

  console.log('File created');
});



// функция разбора командной строки по флагу
function getValue(flag) {
  const index = process.argv.indexOf(flag);
  return (index > -1) ? process.argv[index + 1] : null;
}

const filename = getValue('-f');
const content = getValue('-c');

// Запись файла.
fs.appendFile(filename, content, error => {
  if (error) throw error;

  console.log('File created');
});