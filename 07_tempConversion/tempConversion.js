const ftoc = function(num) {
let x = (num-32) / 1.8
return Math.round(x * 10) / 10
};

const ctof = function(num) {
let x = num * 1.8 + 32
return Math.round(x * 10) / 10
};


// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
