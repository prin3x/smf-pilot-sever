// src/hardware/mockGpio.js
const GPIOInterface = require('../interfaces/gpio.interface');

class MockGPIO extends GPIOInterface {
  constructor(pin, direction) {
    super(pin, direction);
    this.state = 0; // Default state
    console.log(`MockGPIO: Initialized pin ${this.pin} as ${this.direction}`);
  }

  writeSync(value) {
    this.state = value;
    console.log(`MockGPIO: Pin ${this.pin} set to ${value}`);
  }

  readSync() {
    console.log(`MockGPIO: Pin ${this.pin} read as ${this.state}`);
    return this.state;
  }

  unexport() {
    console.log(`MockGPIO: Pin ${this.pin} unexported`);
  }
}

module.exports = MockGPIO;