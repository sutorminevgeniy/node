var socket = io.connect('http://localhost:8080');

window.onunload = function(){
  socket.disconnect();
}

socket.emit('message', 'John');
socket.on('hello', function(data){
  alert(data.hello);
}); 

function getName(first){
  var name =prompt('Как  вас зовут?', 'Гость');
  if(name){
    if(first){
      socket.emit('message', name);
    } else {
      socket.emit('new_message', name);
    }
  }  
}