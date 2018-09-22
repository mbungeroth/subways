const aStops = require('./aStops');
const bStops = require('./bStops');
const cStops = require('./cStops');
const dStops = require('./dStops');
const eStops = require('./eStops');
const fiveStops = require('./fiveStops');
const fStops = require('./fStops');
const fourStops = require('./fourStops');
const gStops = require('./gStops');
const jStops = require('./jStops');
const lStops = require('./lStops');
const mStops = require('./mStops');
const nStops = require('./nStops');
const oneStops = require('./oneStops');
const qStops = require('./qStops');
const rStops = require('./rStops');
const sevenStops = require('./sevenStops');
const shuttleBOneStops = require('./shuttleBOneStops');
const shuttleBTwoStops = require('./shuttleBTwoStops');
const shuttleMStops = require('./shuttleMStops');
const sirStops = require('./sirStops');
const sixStops = require('./sixStops');
const threeStops = require('./threeStops');
const twoStops = require('./twoStops');
const wStops = require('./wStops');
const zStops = require('./zStops');

const allStops = {
  A: aStops,
  B: bStops,
  C: cStops,
  D: dStops,
  E: eStops,
  '5': fiveStops,
  F: fStops,
  '4': fourStops,
  G: gStops,
  J: jStops,
  L: lStops,
  M: mStops,
  N: nStops,
  '1': oneStops,
  Q: qStops,
  R: rStops,
  '7': sevenStops,
  S: shuttleMStops,
  SIR: sirStops,
  '6': sixStops,
  '3': threeStops,
  '2': twoStops,
  W: wStops,
  Z: zStops,
}
//shuttleBOneStops, shuttleBTwoStops,
module.exports = allStops;
