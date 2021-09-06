'use strict'

const getConferences = () => {
  let onDone = null
  const deferred = {
    data: callback => onDone = callback
  }
  setTimeout(() => {
    if (onDone) onDone(['Teheran', 'Yalta', 'Potsdam'])
  }, 5000)
  return deferred
}

const conferences = getConferences()
console.log(conferences)

conferences.data(list => { //emmet to data
  console.log(list)
})

console.log('end')