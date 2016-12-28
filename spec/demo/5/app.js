var express = require('express');
var app = express();
app.listen(8080);

app.get('/', function(request, response){
  response.sendfile(__dirname + '/test.html');
});