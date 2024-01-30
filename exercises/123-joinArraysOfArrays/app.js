function joinArrayOfArrays(arr) {
  // your code here
newarr=[]

for (let x of arr){

  for (let y of x){ 

    newarr.push(y)
  }
}
  return newarr
}

let output = joinArrayOfArrays([
  [1, 4],
  [true, false],
  ['x', 'y'],
]);

console.log(output); // --> [1, 4, true, false, 'x', 'y']
