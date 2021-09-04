// Test.assertEquals(findOutlier([0, 1, 2]), 1)
// Test.assertEquals(findOutlier([1, 2, 3]), 2)
// // Test.assertEquals(findOutlier([2,6,8,10,3]), 3)
// // Test.assertEquals(findOutlier([0,0,3,0,0]), 3)
// // Test.assertEquals(findOutlier([1,1,0,1,1]), 0)

// arr.legth >= 3, 
// My fastest 
function findOutlier(integers){
  let odd = 0
  let even = 0
  for (let i = 0; i < 3; i++){
    (integers[i] % 2 === 0 || -0) ? even ++ : odd++
  }
  if (even >= 2){
    for (item of integers) {
      if (!(item % 2 === 0 || -0)) {
        return item
      }}} else {
    for (item of integers) {
      if ((item % 2 === 0 || -0)) {
        return item
  }}}
}



// the shortest
function findOutlier(int){
  var even = int.filter(a=>a%2==0);
  var odd = int.filter(a=>a%2!==0);
  return even.length==1? even[0] : odd[0];
}

// elegance
function findOutlier(integers){
  return integers.slice(0,3).filter(even).length >=2 ? integers.find(odd) : integers.find(even);
}
function even(num){
  return (num % 2 == 0);
}
function odd(num){
  return !even(num)
}

