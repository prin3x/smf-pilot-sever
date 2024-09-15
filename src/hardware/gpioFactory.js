// src/hardware/gpioFactory.js
const RealGPIO = require('./realGpio');
const MockGPIO = require('./mockGpio');

const ENV = process.env.NODE_ENV || 'development';

function createGPIO(pin, direction) {
  if (ENV === 'production') {
    return new RealGPIO(pin, direction);
  } else {
    return new MockGPIO(pin, direction);
  }
}

module.exports = {
  createGPIO,
};