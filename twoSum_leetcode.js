/*
Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Output: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]
*/

function twoSum(nums, target) {
  const arr = arguments[0]
  let frirstIndex = 0
  let secondIndex = 1
  for (let i=0; i < arr.length - 1; i++){
    for (let j= i + 1; j <= arr.length - 1; j++){
      if (arr[i] + arr[j] == target ){
        frirstIndex = i
        secondIndex =j
        return [frirstIndex, secondIndex]
      }
    }
  }  
}

console.log(twoSum([3,0,4,3],6))
// Runtime: 141 ms, faster than 28.02% of JavaScript online submissions for Two Sum.
// Memory Usage: 38.9 MB, less than 97.09% of JavaScript online submissions for Two Sum.

