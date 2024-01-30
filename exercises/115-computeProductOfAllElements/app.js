function computeProductOfAllElements(arr) {
  // your code here
  if ( arr.length ===0) return 0 
  else{
  n=1
  for (let x of arr){

      n*=x

  }
  return n
}
}

let output = computeProductOfAllElements([2, 5, 6]);
console.log(output); // --> 60
