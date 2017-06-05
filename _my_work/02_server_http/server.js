var http = require('http');
var url = require('url');
var fs   = require('fs');

// http.createServer(function(request, response){
     
//     console.log("Url: " + request.url);
//     console.log("Тип запроса: " + request.method);
//     console.log("User-Agent: " + request.headers["user-agent"]);
//     console.log("Все заголовки");
//     console.log(request.headers);
     
//     response.setHeader("UserId", 12);
//     response.setHeader("Content-Type", "text/html");
//     response.write("<h2>hello world</h2>");
//     response.end();
// }).listen(3000);

var server = new http.Server(function(req, res) {

  var urlParsed = url.parse(req.url, true);
  console.log(urlParsed, '1');

  if (urlParsed.pathname == '/') {

    fs.readFile('index.html', function(err, info) {
      if(err) {
        console.error(err);
        res.statusCode = 500;
        res.end("A server error occurred ");
        return
      }

      res.end(info);
    });

  } else if (urlParsed.pathname == '/echo' && urlParsed.query.message) {
    res.setHeader('Cache-control', 'no-cache');
    res.end( urlParsed.query.message );
  } else {
    res.statusCode = 404; // Not Found
    res.end("Page not found");
  }
});

server.listen(3000, '127.0.0.1');

