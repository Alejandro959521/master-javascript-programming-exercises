function transformEmployeeData(array) {
  // your code here

  let array2 = []
  for (let x of array) {
    obj = {}
    for (let y of x) {
      console.log(y)
      obj[y[0]] = y[1]

    }
    array2.push(obj)
  }
  return array2
}

let output = transformEmployeeData([[['firstName', 'Joe'], ['lastName', 'Blow'], ['age', 42], ['role', 'clerk']], [['firstName', 'Mary'], ['lastName', 'Jenkins'], ['age', 36], ['role', 'manager']]]);
console.log(output); // --> [{ firstName: 'Joe', lastName: 'Blow', age: 42, role: 'clerk' }, { firstName: 'Mary', lastName: 'Jenkins', age: 36, role: 'manager' }]