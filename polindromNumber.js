var isPalindrome = (x) => {  
  if (x < 0) return false
  if (x>= 0 && x < 10) return true

  let arr =[]
  let numb = x

   do {
      arr.push(numb % 10)
      numb = Math.floor(numb / 10)
  } while (numb >= 10)
  if (numb !==0) arr.push(numb)
  const len = arr.length
  for ( let i=0; i < len/2; i++){
    if (arr[i]!==arr[len-1-i]) { return false}
  }
  return true
}

console.log(isPalindrome(10))
console.log(isPalindrome(100))
console.log(isPalindrome(0))
console.log(isPalindrome(9))




  // for(let i = 0; i < (arrLenth / 2); i++) {
  //   console.log(tempArr[i], tempArr[arrLenth - 1 -i])
  //       if(tempArr[i] !== tempArr[arrLenth - 1 -i]) {
  //         console.log(i)
  //         return false
  // //   }
  //   return true
  //   }