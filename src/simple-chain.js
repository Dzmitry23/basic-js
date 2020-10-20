const CustomError = require("../extensions/custom-error");

const chainMaker = {
  values : [],

  getLength() {
    return this.values.length;
  },

  addLink(value) {
    if (value == null) {
      value = 'null';
    } else if (value == undefined) {
      value = '';
    }
    this.values.push(value);
    return this;
  },

  removeLink(position) {
    if(typeof(position) != 'number' || position < 1 || position > this.values.length - 1) {
      this.values = [];
      throw new Error;
    } else {
      this.values.splice(position - 1, 1);
      return this;
    }
  },

  reverseChain() {
    this.values = this.values.reverse();
    return this;
  },

  finishChain() {
    result = this.values.map(value => '( ' + value + ' )').join('~~');
    this.values = [];
    return result;
  }
};

module.exports = chainMaker;

console.log(chainMaker.addLink('8.963').reverseChain().reverseChain().reverseChain().reverseChain().addLink({0: 'first', 1: 'second', 'length': 2}).reverseChain().addLink(3.14).addLink('DEF').reverseChain().finishChain());