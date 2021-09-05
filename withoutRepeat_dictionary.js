// Написать функцию, которая возвращает
// массив только с уникальными значениями
// [1,1,2,2,3,4,5,5] -> [3,4]


function withoutRepeat(arr) {
  const result = []
  const dictionary ={}
  for(let item of arr) {
    dictionary[item] = dictionary[item] ? dictionary +1 : 1
  }
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    if (dictionary[item] === 1) {
        result.push(item);
    }
  }
  return result;
}

console.log(withoutRepeat([1,1,2,2,3,4,5,5,5,5, 7, 8, 9, 9]))