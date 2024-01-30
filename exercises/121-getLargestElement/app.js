function getLargestElement(arr) {
  // your code here
  if (arr.length < 1) return 0
  else {
    y = -999999999999999
    for (let x of arr) {

      if (x > y) y = x

    }
    return y
  }
}

let output = getLargestElement([5, 2, 8, 3]);
console.log(output); // --> 8;