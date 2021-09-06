'use strict' 

const {sin}=Math
const i=f=>x=>1/f(x)
// const inverse = f => {
//   return x => {
//     return 1/f(x)
//   }
// }
const cosecant=i(sin)
console.log(cosecant(1))


