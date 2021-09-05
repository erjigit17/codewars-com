'use strict'

const {sin: S} = Math
const inverse = f => x => 1/f(x)
const cosinus = inverse(S)

console.log(cosinus(5))