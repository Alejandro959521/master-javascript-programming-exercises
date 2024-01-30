function squareElements(arr) {
  // your code here
  newarr=[]
  for (let x of arr){  
    newarr.push(Math.pow(x,2))

  }
  
  return newarr
}

let output = squareElements([1, 2, 3]);
console.log(output); // --> [1, 4, 9]
