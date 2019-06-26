const Server = require('socket.io');

// Создание сервера
const server = new Server(3000);

// обработка событий
server.on('connection', socket => {
    // Название событий произвольна
    socket.on('chat', message => {
        server.emit('chat', message);
    });

    socket.emit('ready', 'Добро пожаловать в CodeDojo');
});