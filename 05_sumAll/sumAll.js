const sumAll = function(a,b) {
let sum = 0;

if (!(Number.isInteger(a) && a > 0 && typeof(a) === 'number')) return 'ERROR'
else if (!(Number.isInteger(b) && b > 0 && typeof(b) === 'number')) return 'ERROR'


if (a>b) {
  let temp = 0;
  temp = a;
  a = b;
  b = temp
}

for (let i = a; i <=b; i++) {
  sum += i;
}
return sum;

};


// Do not edit below this line
module.exports = sumAll;
