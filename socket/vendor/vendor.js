/* eslint-disable comma-dangle */
'use strict';

const io = require('socket.io-client');
const faker = require('faker');
require('dotenv').config();
const caps = io.connect('http://localhost:3500/caps');

const MY_STORE = process.env.MY_STORE || 'Nothing for Everything';

caps.on('connect', () => {
  console.log('You are connected to ', caps.nsp);
  caps.emit('join', MY_STORE);
  caps.on('joined', (room) => {
    console.log('You just Joined Room ', room);
    fakeData();
    caps.on('delivered', (message) => {
      console.log(`Vendor : Thank you for delivering ${message.orderId}`);
    });
  });
  function fakeData() {
    // do whatever you like here
    const newCostumerOrder = {
      storeName: MY_STORE,
      orderId: faker.random.uuid(),
      customerName: faker.name.findName(),
      address: faker.address.city(),
    };
    caps.emit('pickup', newCostumerOrder);
    setTimeout(fakeData, 5000);
  }
});
