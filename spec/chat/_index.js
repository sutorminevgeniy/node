var express = require('express');
var app = express();
var port = 8080;

app.set('views', __dirname + '/tpl');
app.set('view engine', 'jade');
app.engine('jade', require('jade').__express);
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
  res.render('page');
});

var users = {};
function getUsers(obj){
  var tmp = [];
  for(var i in obj){
    tmp.push(obj[i]);
  }
  return tmp.join(', ');  
}

var io = require('socket.io').listen(app.listen(port));
io.sockets.on('connection', function(client){
  // client.emit('message', {message: 'Добро пожаловать в чат!'});
  client.on('send', function(data){
    io.sockets.emit('message', {message: data.message});
  });
  
  client.on('hello', function(data){
    client.set('nickname', data.name);
    client.emit('message', {message: '--- Добро пожаловать в чат, ' + data.name + '! ---'});
    client.broadcast.emit('message', {message: '--- ' + data.name + ', присоединился к чату ---'});

    if(Object.keys(users).length > 0) {
      var usersList = getUsers(users);
      client.emit('message', {message: '--- Уже в чате ' + usersList + ' ---'});
    } else {
      client.emit('message', {message: '--- Кроме вас в чате не кого нет ---'});
    }

    users[client.id] = data.name;
  });

  client.on('disconnect', function(data){
    if(Object.keys(users).length > 1){
      client.get('nickname', function(err, name){
        client.broadcast.emit('message', {message: '---' + name + 'покинул чат ---'})
      });
    }
    delete users[client.id];
  });
});
