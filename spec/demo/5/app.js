var express = require('express');
var request = require('request');
var url = require('url');
var app = express();
app.listen(8080);

app.set('views', __dirname);
app.set('view engine', 'ejs')

var names = {
  'john': 'admin',
  'mike': 'manager',
  'ivan': 'user'
}

app.get('/', function(req, res){
  res.sendfile(__dirname + '/test.html');
});
app.get('/user/:name', function(req, res){
  var name = req.params.name;
  var options = {
    protocol: 'http',
    host: 'localhost:8081',
    pathname: '/',
    query: {user: name}
  };

  var needUrl = url.format(options);
  //var needUrl = 'http://localhost:8081/?name=' + name; // server.js
  request(needUrl, function(err, response, body){
    //console.log(body);
    var arr = JSON.parse(body);
    res.render('user', {
      name: arr[0].name,
      age: arr[0].age,
      role: arr[0].role
    });res.end();
  });
});

// app.get('/user/:name', function(req, res){
//   var role;
//   var name = req.params.name.toLowerCase();

//   if(name in names){
//     role = names[name];
//   } else {
//     role = 'Unknown role';
//   }
  
//   // res.write(role);
//   
//   
// });