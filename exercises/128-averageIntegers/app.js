function average(arr) {
  // your code here
  let suma = sum(arr)

  return suma/arr.length
}

function sum(arr) {
  // your code here
  n=0
  for (let x of arr){
    n+=x
  }
 return n 
}

console.log(average([1, 2])); // --> 1.5
