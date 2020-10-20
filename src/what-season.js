const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if(date == undefined) {
    return 'Unable to determine the time of year!';
  } else if(date.hasOwnProperty('toString')) {
    throw new Error;
  };

  let month = date.getMonth();

  if (2 <= month && month <= 4) {
    return 'spring';
  } else if (5 <= month && month <= 7) {
    return 'summer';
  } else if (8 <= month && month <= 10) {
    return 'autumn';
  } else if (month == 11 || month <= 1) {
    return 'winter';
  }
};
