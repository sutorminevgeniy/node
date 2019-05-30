const fs = require('fs');

// Создание потока на чтение
const input = fs.createReadStream('lorem.txt');

// Создание потока на запись
const output = fs.createWriteStream('lorem.md');

// Перевод данных из потока чтения в поток записи
input.pipe(output);
