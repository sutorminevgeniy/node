var express = require('express');
var app = express();
app.listen(8080);

var names = {
  'john': 'admin',
  'mike': 'manager',
  'ivan': 'user'
}

app.get('/', function(request, response){
  response.sendfile(__dirname + '/test.html');
});
app.get('/user/:name', function(request, response){
  var role = names[request.params.name]
});