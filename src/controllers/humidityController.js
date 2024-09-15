// src/controllers/humidityController.js
const { createSensor } = require("../hardware/sensorFactory");
const { turnOnRelay, turnOffRelay } = require("../services/gpioService");

const SENSOR_TYPE = 22;
const SENSOR_PIN = 4; // GPIO4
const HUMIDITY_THRESHOLD = 60; // Example threshold

const sensor = createSensor(SENSOR_TYPE, SENSOR_PIN);

/**
 * Read humidity from sensor
 */
async function readHumidity() {
  try {
    const humidity = await sensor.readHumidity();
    return humidity;
  } catch (error) {
    console.error("Error reading humidity:", error);
    throw error;
  }
}

/**
 * Monitor humidity and control relay
 */
async function monitorHumidity() {
  try {
    const humidity = await readHumidity();
    console.log(`Current Humidity: ${humidity}%`);

    if (humidity < HUMIDITY_THRESHOLD) {
      turnOnRelay();
    } else {
      turnOffRelay();
    }
  } catch (error) {
    console.error("Error in monitorHumidity:", error);
  }

  return humidity;
}

module.exports = {
  monitorHumidity,
  readHumidity,
};
