'use strict'

const events = require('events')
const emmiter = new events.EventEmitter()

emmiter.on('new city', city => {
  console.log('Emitted city: ' + city)
})
emmiter.on('new city', city => {
  console.log('Emitted city #2 : ' + city)
})

emmiter.on('data', array => {
  console.log(array.reduce((a, b) => a + b))
})

emmiter.emit('new city', 'Delhi')
emmiter.emit('data', [5, 10, 7, -3])