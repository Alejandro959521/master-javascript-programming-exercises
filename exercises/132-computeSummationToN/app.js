function computeSummationToN(n) {
  // your code here
 
  z = 0
  for (let x = 1; x <= n; x++) {

      z += x
  }
  return z

  
}

let output = computeSummationToN(6);
console.log(output); // --> 21

