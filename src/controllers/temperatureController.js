const { createSensor } = require("../hardware/sensorFactory");

const SENSOR_TYPE = 22; // DHT22
const SENSOR_PIN = 4; // GPIO pin for the temperature sensor

const sensor = createSensor(SENSOR_TYPE, SENSOR_PIN);

/**
 * Read temperature from sensor
 */
async function readTemperature() {
  try {
    const temperature = await sensor.readTemperature();
    return temperature;
  } catch (error) {
    console.error("Error reading temperature:", error);
    throw error;
  }
}

module.exports = {
  readTemperature,
};