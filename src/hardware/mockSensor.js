// src/hardware/mockSensor.js
const SensorInterface = require('../interfaces/sensor.interface');

class MockSensor extends SensorInterface {
  constructor() {
    super();
    console.log('MockSensor: Initialized');
  }

  readHumidity() {
    return new Promise((resolve) => {
      // Generate random humidity between 30% and 70%
      const humidity = Math.floor(Math.random() * (70 - 30 + 1)) + 30;
      console.log(`MockSensor: Humidity read as ${humidity}%`);
      resolve(humidity);
    });
  }

  readMoisture() {
    return new Promise((resolve) => {
      const moisture = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
      console.log(`MockSensor: Moisture read as ${moisture}%`);
      resolve(moisture);
    });
  }

  readTemperature() {
    return new Promise((resolve) => {
      const temperature = Math.floor(Math.random() * (30 - 10 + 1)) + 10;
      console.log(`MockSensor: Temperature read as ${temperature}°C`);
      resolve(temperature);
    });
  }
}

module.exports = MockSensor;