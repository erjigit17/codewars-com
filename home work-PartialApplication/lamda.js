'use strict'

const tagged = (pref, str) => `[${pref}] ${str}`

// Define function tagDate that prepends current date to the string.
// E.g. tagDate('My String') === '[2019-11-14] My String'
// Use function tagged to implement tagDate.


const tagDate = (str) => tagged(
  new Date().toLocaleString('ru-RU', {
  day: 'numeric',
  year: 'numeric',
  month: 'numeric',
}), 
  str) 

module.exports = { tagDate };
console.log(tagDate('erji'))