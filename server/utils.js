const convertTime = epoch => new Date(epoch * 1000).toLocaleTimeString();
const currentEpochTime = () => Math.floor(Date.now() / 1000);
const untilArrival = arrivalTime => {
  const minutesUntil = Math.floor((arrivalTime - currentEpochTime()) / 60);
  if (minutesUntil === 1) {
    return "1 Minute";
  } else {
    return `${minutesUntil} Minutes.`
  }
}

module.exports = {
  convertTime,
  currentEpochTime,
  untilArrival,
}
