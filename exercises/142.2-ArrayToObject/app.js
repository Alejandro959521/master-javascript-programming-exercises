function fromListToObject(array) {
  // your code here
  obj = {}

  for (let x of array) {

    console.log(x)

    obj[x[0]] = x[1]

  }

  return obj
}

let output = fromListToObject([['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]])
console.log(output) // --> { make: 'Ford', model: 'Mustang', year: 1964 }
