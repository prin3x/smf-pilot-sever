const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { readHumidity } = require("./controllers/humidityController");
const {
  readMoisture,
  monitorMoisture,
} = require("./controllers/moistureController"); // Add this line
const { turnOnRelay, turnOffRelay } = require("./services/gpioService");
const { readTemperature } = require("./controllers/temperatureController");

const app = express();
const PORT = process.env.PORT || 3030;

app.use(bodyParser.json());
const allowedOrigins = ['http://localhost:3000'];
app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
}));

let currentHumidity = null;
let currentMoisture = null; // Add this line
let relayStatus = "OFF";

// Endpoint to get the current temperature
app.get("/api/temperature", async (req, res) => {
  // Add this block
  try {
    currentTemperature = await readTemperature();
    console.log("currentTemperature::", currentTemperature);
    res.json({ temperature: currentTemperature });
  } catch (error) {
    res.status(500).json({ error: "Failed to get temperature" });
  }
});


// Endpoint to get the current humidity
app.get("/api/humidity", async (req, res) => {
  try {
    currentHumidity = await readHumidity();
    console.log("currentHumidity::", currentHumidity);
    res.json({ humidity: currentHumidity });
  } catch (error) {
    res.status(500).json({ error: "Failed to get humidity" });
  }
});

// Endpoint to get the current moisture
app.get("/api/soil-moisture", async (req, res) => {
  // Add this block
  try {
    currentMoisture = await readMoisture();
    console.log("currentMoisture::", currentMoisture);
    res.json({ soilMoisture: currentMoisture });
  } catch (error) {
    res.status(500).json({ error: "Failed to get moisture" });
  }
});

// Endpoint to get the relay status
app.get("/api/relay-status", (req, res) => {
  res.json({ status: relayStatus });
});

// Endpoint to turn the relay on
app.post("/api/relay/on", (req, res) => {
  try {
    turnOnRelay();
    relayStatus = "ON";
    res.json({ status: "ON" });
  } catch (error) {
    res.status(500).json({ error: "Failed to turn on relay" });
  }
});

// Endpoint to turn the relay off
app.post("/api/relay/off", (req, res) => {
  try {
    turnOffRelay();
    relayStatus = "OFF";
    res.json({ status: "OFF" });
  } catch (error) {
    res.status(500).json({ error: "Failed to turn off relay" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
