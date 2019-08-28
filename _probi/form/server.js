const http = require('http');
const url = require('url');
const path = require('path');
const querystring = require("querystring");
const fs = require("fs");
const os = require("os");
const util = require('util');

var formidable = require('formidable');

const config = require('./config');
const handlFile = require('./core/handlFile');

// Создание сервера
var server = new http.Server(function (req, res) {
  // Обработка запросов
  // Разбор url
  let urlParsed = url.parse(req.url, true);
  let filename = urlParsed.pathname.slice(1); // /file.ext -> file.ext

  // replace this with the location to save uploaded files
var upload_path = config.filesRoot;

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
    else {
      // Обработка оставшихся результатов
      res.statusCode = 404; // Not Found
      res.end("Page not found");
    }
  }

  if (req.method === 'POST') {
    let body = '';
    let bodyArr = [];

    if (!filename) {
      res.statusCode = 404;
      res.end('File not found');
    }

    if (urlParsed.pathname == '/uploadform') {
      var form = new formidable.IncomingForm();

      form.parse(req, function (err, fields, files) {

        console.log({fields, files});
        // oldpath : temporary folder to which file is saved to
        var oldpath = files.filetoupload.path;
        var newpath = path.join(upload_path, files.filetoupload.name);
        console.log({oldpath, newpath});
        
        // copy the file to a new location
        fs.rename(oldpath, newpath, function (err) {
            if (err) throw err;
            // you may respond with another html page
            res.writeHead(200, {'content-type': 'text/plain'});
            res.write('File uploaded and moved!\n\n');
            res.write('received upload:\n\n');
            res.end(util.inspect({fields: fields, files: files}));
        });
      });

      // req
      // .on('data', data => {
      //   // запись данных с формы
      //   body += data;
      //   bodyArr.push(data);
      // })
      // .on('end', () => {
      //   const dataForm = querystring.parse(body);
      //   bodyArr = Buffer.concat(bodyArr).toString();

      //   console.log('body _____________________________________________________________');
      //   console.log(body);
      //   console.log('dataForm _________________________________________________________');
      //   console.log(dataForm);
      //   console.log('bodyArr __________________________________________________________');
      //   console.log(bodyArr);

      //   if (dataForm.file) {
      //     console.log(os.tmpdir())
      //     fs.readFile(path.join(os.tmpdir(), dataForm.file), 'utf-8', (error, data) => {
      //       if(error) return console.log('Такого файла нет!');
          
      //       console.log(data)
      //     });

      //     // console.log(req.file);
      //     // handlFile.onloadFile(path.join(config.filesRoot, dataForm.file), req, res);
      //   }

      //   res.end(`Form loaded : ${body}`);
        
      // });
    }
    else if (filename) {
      handlFile.onloadFile(path.join(config.filesRoot, filename), req, res);
    }
  }
});

// запуск сервера
server.listen(3000, '127.0.0.1');
console.log("Site listen on url: http://localhost:3000/ or http://127.0.0.1:3000/");
