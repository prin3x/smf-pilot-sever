// src/hardware/realGpio.js
const Gpio = require('onoff').Gpio;
const GPIOInterface = require('../interfaces/gpio.interface');

class RealGPIO extends GPIOInterface {
  constructor(pin, direction) {
    super(pin, direction);
    this.gpio = new Gpio(pin, direction);
    console.log(`RealGPIO: Initialized pin ${this.pin} as ${this.direction}`);
  }

  writeSync(value) {
    this.gpio.writeSync(value);
    console.log(`RealGPIO: Pin ${this.pin} set to ${value}`);
  }

  readSync() {
    const value = this.gpio.readSync();
    console.log(`RealGPIO: Pin ${this.pin} read as ${value}`);
    return value;
  }

  unexport() {
    this.gpio.unexport();
    console.log(`RealGPIO: Pin ${this.pin} unexported`);
  }
}

module.exports = RealGPIO;