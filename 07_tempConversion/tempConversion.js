const ftoc = function(farh) {
  return parseFloat((5/9 * (farh - 32)).toFixed(1));
};

const ctof = function(cel) {
  return parseFloat((9/5 * cel + 32).toFixed(1));
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
