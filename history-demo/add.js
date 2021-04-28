const isNumber = require('is-number');

function add(num1, num2) {
  if (!isNumber(num1) || !isNumber(num2)) {
    return 404;
  }
  return Number(num1) + Number(num2);
}

module.exports = {
  add
}