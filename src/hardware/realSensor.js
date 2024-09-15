// src/hardware/realSensor.js
const nodeDhtSensor = require('node-dht-sensor');
const SensorInterface = require('../interfaces/sensor.interface');

class RealSensor extends SensorInterface {
  constructor(type, pin) {
    super();
    this.type = type;
    this.pin = pin;
    nodeDhtSensor.initialize(this.type, this.pin);
    console.log(`RealSensor: Initialized DHT${this.type} on pin ${this.pin}`);
  }

  readHumidity() {
    return new Promise((resolve, reject) => {
      nodeDhtSensor.read(this.type, this.pin, (err, temperature, humidity) => {
        if (err) {
          return reject(err);
        }
        console.log(`RealSensor: Humidity read as ${humidity}%`);
        resolve(humidity);
      });
    });
  }

  readTemperature() { 
    return new Promise((resolve, reject) => {
      nodeDhtSensor.read(this.type, this.pin, (err, temperature, humidity) => {
        if (err) {
          return reject(err);
        }
        console.log(`RealSensor: Temperature read as ${temperature}°C`);
        resolve(temperature);
      });
    });
  }
}

module.exports = RealSensor;