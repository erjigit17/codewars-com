'use strict'

const internal = require("stream")

const fn = () => {
  console.log('Callback frome timer')
}



const timeout = (internal, fn) => setTimeout(fn, internal)
timeout(5000, fn)