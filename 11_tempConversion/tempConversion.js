const doRound = function(what) {      // round a number to one decimal place.
  return Math.round(what * 10) / 10
}

const convertToCelsius = function(fahr) {
  return doRound((fahr - 32) * (5 / 9))
};

const convertToFahrenheit = function(cels) {
  return doRound(32 + (cels * (9 / 5)))
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
