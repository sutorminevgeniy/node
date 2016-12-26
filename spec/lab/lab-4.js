var fs = require('./get-file');
var msg = require('./logs');
var http = require('http');

http.createServer(function(req, res){
  msg.info('Download start');

  res.writeHead(200, {'Content-Type':'image/gif'});
  var file = fs('logo.gif');
  file.pipe(res);

  msg.info('Download finish');
}).listen(8080);