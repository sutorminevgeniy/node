const fs = require('fs');

// Создание потока на чтение
// кодировка 'utf-8' указана для вывода текста, а не буфера
const stream = fs.createReadStream('lorem.txt', 'utf-8');
// const stream = fs.createReadStream('lorem.txt');

let data = '';

// Обработка считанных порций данных
stream.on('data', part => data += part);
// stream.on('data', part => console.log(part.length));
// stream.on('data', part => console.log(part));

// Оработка окончания чтения данных
stream.on('end', () => console.log('End', data.length));

// Обработка ошибок
stream.on('error', error => console.log('Error', error.message));