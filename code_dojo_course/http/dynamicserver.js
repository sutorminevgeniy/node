const http = require('http');
const fs = require('fs');
const path = require('path');

//  Функция преобразования строки запроса в объект
function parseBody(body) {
  // username=Evgen&password=qwerty1
  const result = {};
  const keyValuePairs = body.split('&');

  keyValuePairs.forEach(keyValue => {
    const [key, value] = keyValue.split('=');

    result[key] = value; // {'username': 'Evgen', 'password': 'qwerty1'}
  });

  return result;
}

// Функция помещения данных в шаблон
function render(template, data, done) {
  fs.readFile(path.join(__dirname, 'views', `${template}.view`), 'utf-8', (error, file) => {
    if (error) done(error);

    let html = file;

    for (let prop in data) {
      // замена в шаблонной строке (<h1>{title}</h1>) на данные
      const regex = new RegExp(`{${prop}}`, 'g');

      html = html.replace(regex, data[prop]);
    }

    done(null, html);
  })
}

// Сервер работает с шаблонами
http.createServer((req, res) =>{
  switch (req.method) {
    case 'GET':
      // Отправка формы в  ответ на get запрос
      const stream = fs.createReadStream(path.join(__dirname, 'views', 'form.view'));
      res.writeHead(200, { 'Content-Type': 'text/html' });
      stream.pipe(res);
      break;

    case 'POST':
      // Получение данных post запроса  и отправка их обратно
      let body = '';

      req.setEncoding('utf-8'); // Для получения строки из буфера данных post запроса
      req.on('data', data => body += data);
      req.on('end', () => {
        const data = parseBody(body);

        render('post', data, (error, html) => {
          if (error) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            return res.end(error.message);
          }

          res.writeHead(200, { 'Content-Type': 'text/html' });
          res.end(html);
        });
      });
      break;
  }
}).listen(3000, () => console.log('Сервер работает'));
// Запуск сервера http://localhost:3000/ или http://127.0.0.1:3000/