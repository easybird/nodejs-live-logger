var io;
var sockets = [];

function setup(server) {
  io = require('socket.io')(server);
  io.on('connection', (s) => {
    sockets.push(s);
  });
}

module.exports = {
  setup,
  io,
  sockets
}
