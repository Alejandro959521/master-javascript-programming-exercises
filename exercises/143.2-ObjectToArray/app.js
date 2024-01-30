function listAllValues(obj) {
  
  arr =[]

  for (let x in obj){

    arr.push(obj[x])
  }
return arr
}

let output = listAllValues({ name: 'Sam', age: 25, hasPets: true });
console.log(output); // --> [ 'Sam', 25, true ]
