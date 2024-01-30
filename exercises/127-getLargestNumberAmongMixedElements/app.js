function getLargestNumberAmongMixedElements(arr) {
    // your code here

    if (arr.length === 0) return 0

    else {
      y = -999999999999;
      n = 0
      for (let x of arr) {
  
        if (typeof x === 'number' && x > y) {
          y = x
          n = 1
         
        }
      }
      if (n == 0) return 0 
      else return y
    }
    
}

let output = getLargestNumberAmongMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 5
