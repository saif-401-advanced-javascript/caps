const events = require('../models/events');
require('dotenv').config();
require('../models/caps');
require('../models/driver');
jest.spyOn(global.console, 'log');

describe('CAPS Labs', () => {
  let newCostumerOrder;
  beforeEach(() => {
    newCostumerOrder = {
      storeName: 'My Store',
      orderId: '123597568',
      customerName: 'Saif',
      address: 'Zarqa',
    };
  });
  it('events should referee to the same class', () => {
    const test = require('../models/events');
    expect(test).toBe(events);
  });

  it('should console log called if pickup was called', () => {
    events.emit('pickup', newCostumerOrder);
    expect(console.log).toHaveBeenCalled();
  });
  it('should console log called if in-transit was called', () => {
    events.emit('in-transit', newCostumerOrder);
    expect(console.log).toHaveBeenCalled();
  });
  it('should console log called if delivered was called', () => {
    events.emit('delivered', newCostumerOrder);
    expect(console.log).toHaveBeenCalled();
  });
});
