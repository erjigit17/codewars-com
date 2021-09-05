'use strict';
  
const power = (exp, n) = Math.pow(n, exp)
const square = n => power(2, n)
const cube = power.bind(null, 3)

module.exports = {power, square, cube}