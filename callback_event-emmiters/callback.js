'use strict'

const add = (a, b) => a + b
const sum = (a, b, callback) => callback(a + b)
// const sum = (a, b, callback) => {
//   callback(a + b)
//   return undefined
// }

console.log('Use add: ' + add(5, 2))
sum(5, 2, console.log.bind(null, 'Use sum:'))
