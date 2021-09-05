function fibonachi(n) {
  if (n <= 0 || n == undefined) return 0
  if ( n <= 2 ) return 1
  return fibonachi(n-1) + fibonachi(n-2)
}

console.log(fibonachi(6))