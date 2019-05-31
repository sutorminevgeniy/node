const http = require('http');

// Создание сервера
const server = http.createServer();

// Обработка запросов
server.on('request', (req, res) => {
  // форматирование заголовков ответа. 'text/plain' - простой текст
  res.writeHead(200, {'Content-Type': 'text/plain'});
  // отправка ответа
  res.end('Основы Node.js');
});

// Запуск сервера http://localhost:3000/ или http://127.0.0.1:3000/
server.listen(3000, () => console.log('Сервер работает'));
