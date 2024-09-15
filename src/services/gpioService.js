// src/services/gpioService.js
const { createGPIO } = require('../hardware/gpioFactory');

const RELAY_PIN = 17; // GPIO17
const relay = createGPIO(RELAY_PIN, 'out');

/**
 * Turn the relay ON
 */
function turnOnRelay() {
  relay.writeSync(1);
  console.log('Relay turned ON');
}

/**
 * Turn the relay OFF
 */
function turnOffRelay() {
  relay.writeSync(0);
  console.log('Relay turned OFF');
}

/**
 * Cleanup GPIO on exit
 */
function cleanup() {
  relay.writeSync(0);
  relay.unexport();
}

process.on('SIGINT', cleanup);

module.exports = {
  turnOnRelay,
  turnOffRelay,
};