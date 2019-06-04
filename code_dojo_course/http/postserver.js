const http = require('http');
const fs = require('fs');
const path = require('path');

//  Функция преобразования строки запроса в объект
function parseBody(body) {
  // username=Evgen&password=qwerty1
  const result = {};
  const keyValuePairs = body.split('&'); // ['username=Evgen', 'password=qwerty1']

  keyValuePairs.forEach(keyValue => {
    const [key, value] = keyValue.split('='); // ['username': 'Evgen'], ['password': 'qwerty1']

    result[key] = value; // {'username': 'Evgen', 'password': 'qwerty1'}
  });

  return result;
}

http.createServer((req, res) =>{
  switch (req.method) {
    case 'GET':
      // Отправка формы в  ответ на get запрос
      const stream = fs.createReadStream(path.join(__dirname, 'public', 'form.html'));
      res.writeHead(200, { 'Content-Type': 'text/html' });
      stream.pipe(res);
      break;

    case 'POST':
      // Получение данных post запроса  и отправка их обратно
      let body = '';

      req.setEncoding('utf-8'); // Для получения строки из буфера данных post запроса
      req.on('data', data => body += data);
      req.on('end', () => {
        console.log(body); //> username=Evgen&password=qwerty1

        const data = parseBody(body);

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(data));
      });
      break;
  }
}).listen(3000, () =>  console.log('Сервер работает'));
// Запуск сервера http://localhost:3000/ или http://127.0.0.1:3000/