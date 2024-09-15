const SensorInterface = require('../interfaces/sensor.interface');

class MoistureSensor extends SensorInterface {
  constructor(type, pin) {
    super();
    this.type = type;
    this.pin = pin;
    // Initialize the moisture sensor here
    console.log(`MoistureSensor: Initialized sensor type ${this.type} on pin ${this.pin}`);
  }

  readMoisture() {
    return new Promise((resolve, reject) => {
      // Replace with actual sensor reading logic
      const moisture = Math.random() * 100; // Simulate moisture reading
      console.log(`MoistureSensor: Moisture read as ${moisture}%`);
      resolve(moisture);
    });
  }
}

module.exports = MoistureSensor;