// src/interfaces/gpio.interface.js
class GPIOInterface {
    constructor(pin, direction) {
      this.pin = pin;
      this.direction = direction;
    }
  
    writeSync(value) {
      throw new Error('writeSync method not implemented.');
    }
  
    readSync() {
      throw new Error('readSync method not implemented.');
    }
  
    unexport() {
      throw new Error('unexport method not implemented.');
    }
  }
  
  module.exports = GPIOInterface;