'use strict';

const io = require('socket.io-client');
const caps = io.connect('http://localhost:3500/caps');
const MY_STORE = process.env.MY_STORE || 'Nothing for Everything';

caps.on('connect', () => {
  console.log('You are connected to ', caps.nsp);
  caps.emit('join', MY_STORE);
  caps.on('joined', (room) => {
    console.log('You just Joined Room ', room);
  });
  caps.on('pickup', (message) => {
    setTimeout(() => {
      console.log(`DRIVER : picked up ${message.orderId}`);
      caps.emit('in-transit', message);
    }, 1500);
    setTimeout(() => {
      console.log(`DRIVER : delivered ${message.orderId}`);
      caps.emit('delivered', message);
    }, 3000);
  });
});
