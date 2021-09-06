'use strict'


const iterate = (array, listener) => {for (const item of array)listener(item)}
const print = city => console.log('City: ' + city)

const cities = ['Bishkek', 'Tokmok', 'Karabalta']
iterate(cities, print)