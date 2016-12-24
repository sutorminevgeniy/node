var events = require('events');
var EventEmitter = events.EventEmitter;

var test = new EventEmitter();
test.on('myEvent', onMyEvent);

function onMyEvent(param){
  console.log(arguments[0], arguments[1]);
  // console.log(param.name, param.age);
  // console.log(param);
}

test.emit('myEvent', 'one', 'two')
// test.emit('myEvent', {name: 'Jhon', age: 25})
// test.emit('myEvent', 'Test number one');
// test.emit('myEvent', 'Test number two');