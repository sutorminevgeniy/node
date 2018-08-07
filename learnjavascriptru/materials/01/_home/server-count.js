const {Server} = require('http');
const count = require('./count');

const server = new Server(count);

server.listen(8000);

/*
  node debug
  webstorm
*/
