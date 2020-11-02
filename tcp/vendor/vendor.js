/* eslint-disable comma-dangle */
const net = require('net');
require('dotenv').config();
const uuid = require('uuid').v4;
var faker = require('faker');
const client = new net.Socket();
const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || '3030';

const MY_STORE = process.env.MY_STORE || 'Nothing for Everything';

client.connect(PORT, HOST, () => {
  function fakeData() {
    // do whatever you like here
    const newCostumerOrder = {
      storeName: MY_STORE,
      orderId: uuid(),
      customerName: faker.name.findName(),
      address: faker.address.city(),
    };
    let message = JSON.stringify({
      event: 'pickup',
      payload: newCostumerOrder,
    });
    client.write(message);
    setTimeout(fakeData, 5000);
  }
  fakeData();
  client.on('data', (bufferData) => {
    const dataObj = JSON.parse(bufferData);
    if (dataObj.event === 'delivered') {
      console.log(
        `Vendor : Thank you for delivering ${dataObj.payload.orderId}`
      );
    }
  });
});
