const express = require('express');
const MTA_API_KEY = require('../secrets');
const utils = require('./utils');
const app = express();
const Mta = require('mta-gtfs');
const mta = new Mta({
  key: MTA_API_KEY, // only needed for mta.schedule() method
  feed_id: 1                  // optional, default = 1
});

app.get('/status', async (req, res) => {
  try {
    const status = await mta.status('subway');
    res.json(status)
  } catch (error) {
    console.log(error)
  }
})

app.get('/', async (req, res) => {
  try {
    // const result = await mta.schedule(635, 1);
    const result = await mta.stop();
    // const time = new Date(result.updatedOn * 1000).toLocaleTimeString();
    // res.json(time);
    const results = Object.keys(result).map(key => {
      return ({
      line: key[0],
      stationId: result[key]["stop_id"],
      stopName: result[key]["stop_name"]
    })
    }).filter(station => station["stationId"].length === 3);
    res.json(results)
  } catch (error) {
    console.log(error)
  }
})

app.get('/station/:stationId/northbound', async (req, res) => {
  try {
    const station = req.params.stationId;
    const stationResults = await mta.schedule(station, 1);
    const lastUpdated = stationResults["updatedOn"];
    const northboundTrains = stationResults["schedule"][station]["N"].filter(train => train["arrivalTime"] >= lastUpdated && (train["arrivalTime"] - utils.currentEpochTime()) <= 1800);
    // const closestNorthbound = utils.convertTime(stationResults["schedule"][station]["N"][0]["arrivalTime"])
    // res.json(closestNorthbound);
    res.send(northboundTrains)
    // res.json(northboundTrains)
  } catch (error) {
    console.log(error)
  }
})

const server = app.listen(3000, () => {
  const { address, port } = server.address();
  console.log(`Listening at http://${address}:${port}`);
});
