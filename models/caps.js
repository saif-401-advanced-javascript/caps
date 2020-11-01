const events = require('./events');

events.on('pickup', (payload) => logMessages('pickup', payload));
events.on('in-transit', (payload) => logMessages('in-transit', payload));
events.on('delivered', (payload) => {
  console.log(`Vendor : Thank you for delivering ${payload.orderId}`);
  logMessages('delivered', payload);
});

function logMessages(event, payload) {
  console.log('Events', {
    event,
    time: new Date(),
    payload,
  });
}
