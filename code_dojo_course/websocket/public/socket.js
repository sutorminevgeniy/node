const status = document.getElementById('status');
const messages = document.getElementById('messages');
const form = document.getElementById('form');
const input = document.getElementById('input');

// Подключение сокета на клиенте
const socket = io('http://localhost:3000');

function setStatus(value) {
    status.innerHTML = value;
}

function printMessage(value) {
    const li = document.createElement('li');

    li.innerHTML = value;
    messages.appendChild(li);
}
// обработка отправки формы
form.addEventListener('submit', event => {
    event.preventDefault();

    socket.emit('chat', input.value);
    input.value = '';
});

// обработка событий socket
socket.on('connect', () => setStatus('ONLINE'));

socket.on('disconnect', () => setStatus('DISCONNECTED'));

socket.on('chat', message => printMessage(message));

socket.on('ready', message => printMessage(message));
// http://localhost:8080/