const http = require('http');
const todos = require('./data/todos.json');

// Сервер возвращает json клиенту
http.createServer((req, res) => {
  if (req.url === '/todos') { // Получение списка задач
    res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
    res.end(JSON.stringify(todos)); // аргумент должен быть либо стокой либо буфером
  }
  else if (req.url === '/todos/completed') { // Получение завершённых задач
    const complited = todos.filter(todo => todo.completed);

    res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
    res.end(JSON.stringify(complited)); // аргумент должен быть либо стокой либо буфером
  }
  else if (req.url.match(/\/todos\/\d+/)) { // Получение задачи по id
    const id = parseInt(req.url.replace(/\D+/, ''));

    const todo = todos.find(todo => todo.id === id);

    if (!todo) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('Not found'); // аргумент должен быть либо стокой либо буфером
    }
    else {
      res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
      res.end(JSON.stringify(todo)); // аргумент должен быть либо стокой либо буфером
    }
  }
  else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not found'); // аргумент должен быть либо стокой либо буфером
  }

}).listen(3000, () => console.log('Сервер работает'));
// Запуск сервера http://localhost:3000/ или http://127.0.0.1:3000/