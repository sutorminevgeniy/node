const fs = require('fs');
const path =require('path');

// Функция отправки файла index.html
function home(req, res) {
  res.setHeader('Content-Type', 'text/html');
  res.statusCode = 200;

  const stream = fs.createReadStream(path.resolve('public', 'index.html'));

  stream.pipe(res);
}

module.exports = home;