// Подключение пакета для вебсокета
const WebSocket = require('ws');

// Создание сервера
const server = new WebSocket.Server({ port: 3000 });

// обработка событий
server.on('connection', ws => {
  // обработка полученных сообщений
  ws.on('message', message => {
    if (message === 'exit') {
      // закрытие соединения с клиентом отправившем данное сообщение
      ws.close();
    } else {
      // отравка сообщений всем подключенным клиентам
      server.clients.forEach(client => {
        if (client.readyState === WebSocket.OPEN) {
          client.send(message);
        }
      });
    }
  });

  // отправка сообщений
  ws.send('Добро пожаловать в CodeDojo');
});