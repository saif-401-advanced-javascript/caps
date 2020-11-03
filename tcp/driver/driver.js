'use strict';

const net = require('net');
require('dotenv').config();
const client = new net.Socket();
const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || '3030';

client.connect(PORT, HOST, () => {
  client.on('data', (bufferData) => {
    let dataObj = JSON.parse(bufferData);
    if (dataObj.event == 'pickup') {
      setTimeout(() => {
        console.log(`DRIVER : picked up ${dataObj.payload.orderId}`);
        const message = JSON.stringify({
          event: 'in-transit',
          payload: dataObj.payload,
        });
        client.write(message);
      }, 1000);
    } else if (dataObj.event == 'in-transit') {
      setTimeout(() => {
        console.log(`DRIVER : delivered up ${dataObj.payload.orderId}`);
        const message = JSON.stringify({
          event: 'delivered',
          payload: dataObj.payload,
        });
        client.write(message);
      }, 3000);
    }
  });
});
