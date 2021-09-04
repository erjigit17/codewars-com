function squareDigits(num){
  const inStr = num.toString()
  let result = ''
  for (let i = 0; i < inStr.length; i++) {
    const curentNum = parseInt(inStr[i]) 
    result += (curentNum * curentNum).toString()
  }
  return parseInt(result);
}