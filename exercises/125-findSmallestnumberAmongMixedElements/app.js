function findSmallestNumberAmongMixedElements(arr) {
  // your code here
  if (arr.length === 0) return 0

  else {
    y = Infinity;
    n = 0
    for (let x of arr) {

      if (typeof x === 'number' && x < y) {
        y = x
        n = 1
       
      }
    }
    if (n == 0) return 0 
    else return y
  }
}

let output = findSmallestNumberAmongMixedElements(['lincoln', 'octopus']);
console.log(output); // --> 4
