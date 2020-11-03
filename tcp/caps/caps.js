const net = require('net');
const PORT = process.env.PORT || 3030;
const uuid = require('uuid').v4;
const server = net.createServer();
server.listen(PORT, () => {
  console.log(`Working on port ${PORT}`);
});

const socketPool = {};

server.on('connection', (socket) => {
  const clientId = uuid();
  socketPool[clientId] = socket;
  socket.on('data', (buffer) => checkValidObj(buffer));

  function checkValidObj(buffer) {
    for (const socket in socketPool) {
      socketPool[socket].write(buffer);
    }
    const receivedEvent = JSON.parse(buffer.toString().trim());
    if (receivedEvent.event == 'pickup') {
      logMessages('pickup', receivedEvent);
    } else if (receivedEvent.event == 'in-transit') {
      logMessages('in-transit', receivedEvent);
    } else if (receivedEvent.event == 'delivered') {
      logMessages('delivered', receivedEvent);
    }
  }

  function logMessages(event, payload) {
    console.log('Events', {
      event,
      time: new Date(),
      payload,
    });
  }
});
