var http = require('http');

// function foo(request, response){
//   response.writeHead(200);
//   response.write('Hello, world!');
//   response.end();
// }

// var app = http.createServer(foo);
// app.listen(8080);



var app = http.createServer(function foo(request, response){
  response.writeHead(200);
  response.write('Hello, world!');
  response.end();
}).listen(8080);

console.log('Listening on 8080...')