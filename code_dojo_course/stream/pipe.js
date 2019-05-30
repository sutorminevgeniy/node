const fs = require('fs');
const zlib = require('zlib');

// Создание потока на чтение
const input = fs.createReadStream('lorem.txt');

// Создание потока на запись
const output = fs.createWriteStream('lorem.md.gz');
// const output = fs.createWriteStream('lorem.md');

// Поток сжатия (архивации)
// является дуплекс потоком для чтения и записи
const gzip = zlib.createGzip();

// Перевод данных из потока чтения в поток записи через поток сжатия
input.pipe(gzip).pipe(output);
// Перевод данных из потока чтения в поток записи
// input.pipe(output);

// Не работающий пример для понимания работы pipe()
class ReadStream {
  pipe(stream) {
      this.on('data', part => stream.write(part));
      return stream;
  }
}