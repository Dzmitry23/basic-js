const CustomError = require("../extensions/custom-error");

const cat = '^^';

module.exports = function countCats(matrix) {
  return [].concat(...matrix).filter(item => item === cat).length;
};