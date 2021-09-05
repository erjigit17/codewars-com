'use strict'

const tagged = (pref, str) => `[${pref}] ${str}`

const tagDate = (myStr) => {
  const currentDate = new Date().toISOString().slice(0, 10)
  return tagged(currentDate, myStr) 
}


console.log(tagDate('erji'))

module.exports = { tagDate };