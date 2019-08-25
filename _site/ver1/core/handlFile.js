const fs = require('fs');

const config = require('../config');

// функция для отправки файла с сервера
function sendFile(filepath, res, mimeType) {
  let fileStream = fs.createReadStream(filepath);
  fileStream.pipe(res);

  // обработка ошибок
  fileStream.on('error', function (err) {
    if (err.code === 'ENOENT') {
      res.statusCode = 404;
      res.end('Not found');
    } else {
      console.error(err);
      if (!res.headersSent) {
        res.statusCode = 500;
        res.end('Internal error');
      } else {
        res.end();
      }
    }
  });

  if (mimeType) {
    // установка типа файла в заголовок запроса
    fileStream.on('open', function () {
      res.setHeader('Content-Type', mimeType);
    });
  }

  // прекращение передачи при обрыве сети
  res.on('close', function () {
    fileStream.destroy();
  });

}

// Функция загрузки файла
function onloadFile(filepath, req, res) {
  let size = 0;

  let writeStream = new fs.WriteStream(filepath, { flags: 'wx' });

  req
    .on('data', chunk => {
      // проверка превышает ли файл указанный размер
      size += chunk.length;
      console.log('data');
      if (size > config.limitFileSize) {
        console.log('too big!');
        res.statusCode = 413;
        res.setHeader('Connection', 'close');
        res.end('File is too big!');

        writeStream.destroy();
        fs.unlink(filepath, err => {
          /* ignore error */
        });

      }
    })
    .on('close', () => {
      // Обработка обрыва связи
      writeStream.destroy();
      fs.unlink(filepath, err => {
        /* ignore error */
      });
    })
    .pipe(writeStream);

  writeStream
    .on('error', err => {
      // Обработка ошибок записи
      if (err.code === 'EEXIST') {
        // файл уже существует
        res.statusCode = 409;
        res.end('File exists');
      } else {
        // прочие ошибки
        console.error(err);
        if (!res.headersSent) {
          res.writeHead(500, { 'Connection': 'close' });
          res.write('Internal error');
        }
        fs.unlink(filepath, err => {
          /* ignore error */
          res.end();
        });
      }

    })
    .on('close', () => {
      // обработка завершения записи
      res.end('OK');

    });

  // обработка завершения отправки ответа
  res.on('finish', () => console.log('finish'));
}

module.exports = {
  sendFile,
  onloadFile
};