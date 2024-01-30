function computeSumOfAllElements(arr) {
  // your code here
  n = 0
  for (let x of arr) {

    n += x
  }
  return n
}

let output = computeSumOfAllElements([1, 2, 3])
console.log(output); // --> 6
