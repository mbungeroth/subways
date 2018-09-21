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

app.get('/station/:stationId/:direction', async (req, res) => {
  try {
    const station = req.params.stationId;
    const direction = req.params.direction;
    const stationResults = await mta.schedule(station, 1);
    const lastUpdated = stationResults["updatedOn"];
    const incomingTrainData = stationResults["schedule"][station][direction].filter(train => train["arrivalTime"] >= lastUpdated && (train["arrivalTime"] - utils.currentEpochTime()) <= 1800);
    const incomingTrains = incomingTrainData.map(incomingTrain => {
      return ({
        train: incomingTrain["routeId"],
        delay: incomingTrain["delay"],
        time: utils.untilArrival(incomingTrain["arrivalTime"]),
      })
    })
    res.send(incomingTrains)
  } catch (error) {
    console.log(error)
  }
})

const server = app.listen(3000, () => {
  const { address, port } = server.address();
  console.log(`Listening at http://${address}:${port}`);
});
