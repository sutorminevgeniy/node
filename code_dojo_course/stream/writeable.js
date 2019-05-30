const fs = require('fs');

// Создание потока на чтение
const input = fs.createReadStream('lorem.txt');

// Создание потока на запись
const output = fs.createWriteStream('lorem.md');

// Запись считанных порций данных
input.on('data', part => output.write(part));

// Обработка ошибок
input.on('error', error => console.log('Error', error.message));