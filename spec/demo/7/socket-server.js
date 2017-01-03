var socket =require('socket.io');
var express = require('express');

var app = express();
var io = socket.listen(app.listen(8080));

app.set('views', __dirname);
app.set('view engine', 'jade');
app.engine('jade', require('jade').__express);
app.use(express.static(__dirname + '/folder'))

app.get('/', function(req, res){
  res.render('page');
  // res.sendfile(__dirname + '/index.html');
});
io.sockets.on('connection', function(client){
  console.log('Connected');
  
  client.on('message', function(data){
    client.set('nickname', data);
    client.emit('hello', {hello: 'Привет '  + data});
    client.broadcast.emit('hello', {hello: 'Привет от '  + data});
    // io.sockets.emit('hello', {hello: 'Привет всем'});
  });
  client.on('disconnect', function(){
    io.sockets.emit('hello', {hello: 'Один из нас свалил'});
  });
  client.on('new_message', function(data){
    client.emit('hello', {hello: 'Привет '  + data});
    client.get('nickname', function(err, oldName){
      client.broadcast.emit('hello', {hello: oldName + ' теперь '  + data});
    });
    client.set('nickname', data);

    // client.broadcast.emit('hello', {hello: ' теперь '  + data});
  });
});