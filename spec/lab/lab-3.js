var fs = require('fs');
var http = require('http');

http.createServer(function(req, res){

  res.writeHead(200, {'Content-Type': 'image/gif'});
  var file = fs.createReadStream('logo.gif');
  file.pipe(res);

}).listen(8080);
/*var file = fs.createReadStream('index.html');
file.on('data', function(txt){
  // console.log(txt.toString());
  process.stdout.write(txt.toString());
})
file.pipe(process.stdout);*/