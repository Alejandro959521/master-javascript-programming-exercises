function convertObjectToList(obj) {
  // your code here
  let arr1 = []


  for (let x in obj) {
    let arr2 = []
    arr2.push(x)
    arr2.push(obj[x])
    arr1.push(arr2)
  }

  return arr1
}

let output = convertObjectToList({ name: 'Holly', age: 35, role: 'producer' });
console.log(output); // --> [ ['name', 'Holly'], ['age', 35], ['role', 'producer'] ]
