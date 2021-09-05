const concerts = {
  'Bishkek': new Date ('2021-09-24'),
  'Tokmok': new Date ('2021-09-4'),
  'Naryn': new Date ('2021-09-16'),
}

function concertToArr (concerts) {
  return Object.keys(concerts)
    .filter(city => concerts[city] > new Date())
    .sort((a,b) => concerts[a] - concerts[b])
}



console.log(concertToArr(concerts))