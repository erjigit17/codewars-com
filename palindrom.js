// fast
function palindrom(text) {
  text = text.toLowerCase()
  for (let i=0; i < text.length/2; i++) {
    if (text[i] !== text[text.length - 1 -i]) return false
  }
  return true
}

// short and clean 
function palindrom(text) {
  text = text.toLowerCase()
  return text === text.split('').reverse().join('')
}
console.log(palindrom('assa'))