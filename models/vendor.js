const events = require('./events');
const { v4: uuid } = require('uuid');
require('dotenv').config();

const MY_STORE = process.env.MY_STORE || 'Nothing for Everything';
const arrayOfNames = ['saif', 'ahmad', 'mohammed', 'Malek', 'Hossam'];
const arrayOfAddress = ['Zarqa', 'Amman', 'Irbid', 'Jarash', 'Mafraq'];

require('./caps');
require('./driver');

function fakeData() {
  // do whatever you like here
  let index = Math.floor(Math.random() * (arrayOfNames.length - 0) + 0);
  const newCostumerOrder = {
    storeName: MY_STORE,
    orderId: uuid(),
    customerName: arrayOfNames[index],
    address: arrayOfAddress[index],
  };
  events.emit('pickup', newCostumerOrder);
  //   events.emit('in-transit', newCostumerOrder);
  //   events.emit('delivered', newCostumerOrder);
  setTimeout(fakeData, 5000);
}

fakeData();
