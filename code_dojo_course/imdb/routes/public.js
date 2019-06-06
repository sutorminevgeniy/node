const fs = require('fs');
const path =require('path');

// Функция отправки файлов с сурвера
function public(req, res) {
  const extension = path.extname(req.url); // /css/app.css -> .css
  const filename = req.url.slice(1); // /css/app.css -> css/app.css
  let contentType = '';

  switch (extension) {
    case '.html':
      contentType = 'text/html';
      break;
    case '.css':
      contentType = 'text/css';
      break;
    case '.js':
      contentType = 'text/javascript';
      break;
    case '.png':
      contentType = 'image/png';
      break;
    default:
      contentType = 'text/plain';
  }

  // сделано по тому что (res.writeHead) должен вызываться только один раз
  res.setHeader('Content-Type', contentType);
  res.statusCode = 200;

  const stream = fs.createReadStream(path.resolve('public', filename));
  // (path.resolve('public', req.url)) - задаёт абсолютный путь из (public/css/app.css)
  // const stream = fs.createReadStream(path.join(__dirname, '..', 'public', req.url));

  stream.pipe(res);
  stream.on('error', error => {
    if (error.code === 'ENOENT') {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('Not found');
    }
    else {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end(error.message);
    }
  });
}

module.exports = public;