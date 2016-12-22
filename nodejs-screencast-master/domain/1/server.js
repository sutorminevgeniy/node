var http = require('http');
var fs = require('fs');

function handler(req, res) {

  if (req.url == '/') {

    fs.readFile('index.html', function(err, info) {
      if (err) throw err;
      res.end(info);
    });

  } else {
    res.statusCode = 404;
    res.end("Not Found");
  }

}

var server = new http.createServer(handler);
server.listen(3000);
