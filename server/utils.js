const convertTime = epoch => new Date(epoch * 1000).toLocaleTimeString();
const currentEpochTime = () => Math.floor(Date.now() / 1000)

module.exports = {
  convertTime,
  currentEpochTime,
}
