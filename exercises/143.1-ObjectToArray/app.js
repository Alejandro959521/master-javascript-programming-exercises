function getAllKeys(obj) {
  // your code here
  arr = []
  for ( let x in obj){

    arr.push(x)

  }
  return arr

}

let output = getAllKeys({ name: "Sam", age: 25, hasPets: true });
console.log(output); // --> [ 'name', 'age', 'hasPets' ]
