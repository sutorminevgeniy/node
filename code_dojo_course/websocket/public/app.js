const status = document.getElementById('status');
const messages = document.getElementById('messages');
const form = document.getElementById('form');
const input = document.getElementById('input');

// Подключение вебсокета на клиенте
const ws = new WebSocket('ws://localhost:3000');

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

    ws.send(input.value);
    input.value = '';
})

// обработка событий WebSocket
ws.onopen = () => setStatus('ONLINE');

ws.onclose = () => setStatus('DISCONNECTED');

ws.onmessage = response => printMessage(response.data);
// http://localhost:8080/