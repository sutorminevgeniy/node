const http = require('http');

const public = require('./routes/public');

// Создание сервера
http.createServer((req, res) => {
  if (req.url.match(/\.(html|css|js|png)$/)) {
    public(req, res);
  }
  else if (req.url === '/') {

  }
  else if (req.url.startsWith('/search')) {

  }
  else {

  }
}).listen(3000, () => console.log('Сервер работает'));
// Запуск сервера http://localhost:3000/ или http://127.0.0.1:3000/