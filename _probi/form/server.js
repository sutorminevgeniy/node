const http = require('http');
const url = require('url');
const path = require('path');

const config = require('./config');
const handlFile = require('./core/handlFile');

// Создание сервера
var server = new http.Server(function (req, res) {
  // Обработка запросов
  // Разбор url
  let urlParsed = url.parse(req.url, true);
  let filename = urlParsed.pathname.slice(1); // /file.ext -> file.ext

  if (req.method === 'GET') {
    if (urlParsed.pathname == '/') {
      // Корневая страница отправка файла index.html
      handlFile.sendFile('public/index.html', res);
    }
    else if (urlParsed.pathname == '/uploadfile') {
      // Корневая страница отправка файла index.html
      handlFile.sendFile('public/uploadfile.html', res);
    }
    else if (urlParsed.pathname == '/form') {
      // Корневая страница отправка файла index.html
      handlFile.sendFile('public/form.html', res);
    }
    else if (urlParsed.pathname.match(/\.js$/i)) {
      // отправка js файлов
      handlFile.sendFile('public/js' + urlParsed.pathname, res);
    }
    else if (urlParsed.pathname.match(/\.css$/i)) {
      // отправка css файлов
      handlFile.sendFile('public/css' + urlParsed.pathname, res, "text/css");
    }
    else if (urlParsed.pathname.match(/\.(jpg|png|gif|svg)$/i)) {
      // отправка изображений
      handlFile.sendFile('public/img' + urlParsed.pathname, res);
    }
    else if (urlParsed.pathname == '/echo' && urlParsed.query.message) {
      // запрос вида http://localhost:3000/echo?message=Hello
      res.setHeader('Cache-control', 'no-cache');
      res.end(urlParsed.query.message);
    }
    else {
      // Обработка оставшихся результатов
      res.statusCode = 404; // Not Found
      res.end("Page not found");
    }
  }

  if (req.method === 'POST') {
    let body = '';

    if (!filename) {
      res.statusCode = 404;
      res.end('File not found');
    }

    if (urlParsed.pathname == '/uploadform') {
      // Корневая страница отправка файла index.html
      req
      .on('data', data => {
        // запись данных с формы
        body += data;
      })
      .on('end', () => {
        let dataForm = body.split('&');

        dataForm = dataForm.map(item => {
          let result = item.split('=');

          return {[result[0]]: result[1]};
        });

        // console.log(req);
        console.log(dataForm);

        res.end(`Form loaded : ${body}`);
      });
    }
    else if (filename) {
      handlFile.onloadFile(path.join(config.filesRoot, filename), req, res);
    }
  }
});

// запуск сервера
server.listen(3000, '127.0.0.1');
console.log("Site listen on url: http://localhost:3000/ or http://127.0.0.1:3000/");
