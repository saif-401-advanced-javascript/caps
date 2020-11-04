'use strict';
const io = require('socket.io')(3500);
io.on('connection', (socket) => {
  console.log('Welcome', socket.id);
});
const caps = io.of('/caps'); // namespace called caps
caps.on('connection', (socket) => {
  socket.on('join', (room) => {
    socket.join(room);
    console.log(`Client ${socket.conn.id} has joined room ${room}`);
    caps.to(`${socket.id}`).emit('joined', room);
  });
  socket.on('pickup', (message) => {
    caps.emit('pickup', message);
    logMessages('pickup', message);
  });

  socket.on('in-transit', (message) => {
    logMessages('in-transit', message);
  });

  socket.on('delivered', (message) => {
    logMessages('delivered', message);
    caps.to(message.storeName).emit('delivered', message);
  });

  function logMessages(event, payload) {
    console.log('Events', {
      event,
      time: new Date(),
      payload,
    });
  }
});
