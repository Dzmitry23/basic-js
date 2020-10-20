const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if(typeof(sampleActivity) != 'string') {
    return false;
  }
  let sampAct = parseFloat(sampleActivity);

  if(sampAct <= 0 || sampAct > MODERN_ACTIVITY || !isFinite(sampAct)) {
    return false;
  }
  return Math.ceil(Math.log(MODERN_ACTIVITY / sampAct) / (0.693 / HALF_LIFE_PERIOD));
};