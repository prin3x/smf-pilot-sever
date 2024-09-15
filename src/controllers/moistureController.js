const { createSensor } = require("../hardware/sensorFactory");
const { turnOnRelay, turnOffRelay } = require("../services/gpioService");

const SENSOR_TYPE = 'moisture';
const SENSOR_PIN = 5; // GPIO pin for the moisture sensor
const MOISTURE_THRESHOLD = 30; // Example threshold

const sensor = createSensor(SENSOR_TYPE, SENSOR_PIN);

/**
 * Read moisture from sensor
 */
async function readMoisture() {
  try {
    const moisture = await sensor.readMoisture();
    return moisture;
  } catch (error) {
    console.error("Error reading moisture:", error);
    throw error;
  }
}

/**
 * Monitor moisture and control relay
 */
async function monitorMoisture() {
  try {
    const moisture = await readMoisture();
    console.log(`Current Moisture: ${moisture}%`);

    if (moisture < MOISTURE_THRESHOLD) {
      turnOnRelay();
    } else {
      turnOffRelay();
    }
  } catch (error) {
    console.error("Error in monitorMoisture:", error);
  }

  return moisture;
}

module.exports = {
  monitorMoisture,
  readMoisture,
};