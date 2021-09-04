// # 3 Time: 711ms (es5)

// function squareDigits(num){
//   const inStr = num.toString()
//   let result = ''
//   for (let i = 0; i < inStr.length; i++) {
//     const curentNum = parseInt(inStr[i]) 
//     result += (curentNum ** 2).toString()
//   }
//   return parseInt(result);
// }


// #2 Time: 768ms (es6)
// function squareDigits(num){ 
//   const inStr = num.toString()
//   let result = ''
//   for (let item of inStr) {
//     const curentNum = parseInt(item) 
//     result += (curentNum ** 2).toString()
//   }
//   return parseInt(result);
// }

// 791ms
function squareDigits(num){ 
  const inStr = num.toString()
  let result = '' 
  inStr.split('').forEach(item => {
    const curentNum = parseInt(item) 
    result += (curentNum ** 2).toString()
  })  
  return parseInt(result)
}

  
console.log(squareDigits(12))
