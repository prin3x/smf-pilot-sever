// src/hardware/sensorFactory.js
const RealSensor = require('./realSensor');
const MockSensor = require('./mockSensor');

const ENV = process.env.NODE_ENV || 'development';

function createSensor(type, pin) {
  if (ENV === 'production') {
    return new RealSensor(type, pin);
  } else {
    return new MockSensor();
  }
}

module.exports = {
  createSensor,
};