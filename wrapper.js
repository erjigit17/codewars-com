'use strict'

const logable = fn => (...args) => {
  const res = fn(...args) 
  console.log(`Call: ${fn.name}(${args.join(', ')}) Result: ${res}`)
  return res
}

const sum = (a, b) => (a + b)
const sum2 = (a, b, c) => (a + b + c)
const wrapped = logable(sum2)

const a = wrapped(3, 5, 6)
const b = wrapped(2, -5, 6)
const c = wrapped(1, 4, 3)
console.log({a, b, c})
