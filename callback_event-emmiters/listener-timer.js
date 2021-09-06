'use strict'

const iterate = (array, listener) => { 
  let counter = 0
  setInterval(() => {
    listener(array[counter++])
    if (counter >= array.length) counter = 0
  }, 100)
}

const print = city => console.log('City: ' + city)

const cities = ['Bishkek', 'Tokmok', 'Karabalta']

iterate(cities, print)