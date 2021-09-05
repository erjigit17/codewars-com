const one = (callback) =>  callback ? callback(1) : 1
const two = (callback) =>  callback ? callback(2) : 2
const three = (callback) =>  callback ? callback(3) : 3
const four = (callback) =>  callback ? callback(4) : 4
const five = (callback) =>  callback ? callback(5) : 5
const six = (callback) =>  callback ? callback(6) : 6
const seven = (callback) =>  callback ? callback(7) : 7
const eight = (callback) =>  callback ? callback(8) : 8
const tnine = (callback) => callback ? callback(9) : 9

const plus = (a) => (b) => a + b
const minus = (a) => (b) => a - b
const mult = (a) => (b) => a * b
const divide = (a) => (b) => a / b

console.log(one(plus(two())))
console.log(two(mult(two())))