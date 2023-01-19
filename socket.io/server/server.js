const app = require('express')();

const server = require('http').createServer(app);

const io = require('socket.io')(server, {
  cors: {
    origin: "*",
  }
});

io.on('connection', socket => {
  console.log('SOCKET', socket);
  console.log('SOCKET IS ACTIVE');

  socket.on('chat', payload => {
    console.log('What is payload', payload);
    io.emit('chat', payload)
  });
});

server.listen(5000, () => console.log('server listing on port 5000...'))