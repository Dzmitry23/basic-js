const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  if (str == null) {
    options.addition = 'null';
  }

  if (options.addition == undefined) {
    options.addition = '';
  } else if (options.addition == null) {
    options.addition = 'null';
  }

  let repeatAddition = new Array(options.additionRepeatTimes)
      .fill(options.addition)
      .join(options.additionSeparator ? options.additionSeparator : '|');
  let result = new Array(options.repeatTimes)
      .fill(str + repeatAddition)
      .join(options.separator ? options.separator : '+');
  return result;
};