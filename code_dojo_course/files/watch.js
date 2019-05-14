const fs = require('fs');

// Следит за изменениями в указанной папке
const watcher = fs.watch(__dirname, (event, filename) => {
  console.log(event);
  console.log(filename);
});

// Отлавливаем ошибку
watcher.on('error', error => console.log(error));