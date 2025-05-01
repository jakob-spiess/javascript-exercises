const add = function(x, y) {
	return x+y;
};

const subtract = function(x,y) {
	return x-y;
};

const sum = function(arr) {
	return arr.reduce((tot, curr) => tot + curr, 0);
};

const multiply = function(arr) {
  return arr.reduce((tot, run) => tot * run, 1);
};

const power = function(x,y) {
	return x**y;
};

const factorial = function(n) {
  let res = 1;
	for (let i = 1; i <= n; i++) {
    res *= i;
  }
  return res;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
