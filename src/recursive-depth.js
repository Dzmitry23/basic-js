const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let depth = 1;

    for(let i = 0; i < arr.length; i++) {
      if(Array.isArray(arr[i])) {
        let newDepth = this.calculateDepth(arr[i]);
        if(depth < ++newDepth) {
          depth = newDepth;
        }
      }
    }
    return depth;
  }
};