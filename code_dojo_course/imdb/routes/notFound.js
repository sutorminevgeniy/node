const fs = require('fs');
const path =require('path');

// Функция отправки файла index.html
function notFound(req, res) {
  res.setHeader('Content-Type', 'text/html');
  res.statusCode = 200;

  const stream = fs.createReadStream(path.resolve('public', 'error.html'));

  stream.pipe(res);
}

module.exports = notFound;