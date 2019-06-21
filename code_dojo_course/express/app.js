const express = require('express');
const morgan = require('morgan'); // пакет вывода информации о запросах

const todos= require('./todos');

// Создание сервера
const app = express();


// Установка шаблонизатора для Express (pug)
app.set('view engine', 'pug');


// Функция для Middleware
function log(req, res, next) {
  let date = new Date(Date.now());

  console.log(`${date} - ${req.method} - ${req.url}`);

  // Для продолжения выполнения цепочки функций
  next();
}

// Регистрация функция как Middleware
app.use(log);
// app.use('/log', log);

// вывод информации о запросах (пример сторонних Middleware)
app.use(morgan('combined'));
// app.use(morgan('dev'));

// Вывод статических файлов (http://localhost:3000/index.html)
app.use(express.static(__dirname + '/public'));


// Обработка запросов
app.get('/', (req, res) => {
  // res.end('Express');

  // Аналогично end() но сам создает заголовки
  // res.send('<h1>Express Todo</h1>');

  // отправка распарсенного шаблона
  res.render('index', {
    title: 'Express Todo',
    todos
  });
  // res.render('index');
});

// (http://localhost:3000/todos)
app.get('/todos', (req, res) => {
  console.log('req.query = ', req.query);

  // (http://localhost:3000/todos?complited=true)
  if (req.query.complited) {
    return res.json(todos.filter(todo => todo.complited.toString() === req.query.complited));
  }

  // отправка json
  res.json(todos);
});

//  Запрос с параметрами (http://localhost:3000/todos/1)
app.get('/todos/:id', (req, res) => {
  console.log('req.params = ', req.params);

  // находим запись с данным id
  let todo = todos.find(todo => todo.id == req.params.id);

  // (http://localhost:3000/todos/5)
  if (!todo) return res.status(404).send('Не найдено');
  // if (!todo) return res.sendStatus(404);

  res.json(todo);
});

// Запуск сервера http://localhost:3000/ или http://127.0.0.1:3000/
app.listen(3000, () => console.log('Сервер работает'));