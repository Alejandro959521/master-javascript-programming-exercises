function computeSumBetween(num1, num2) {
    // your code here
    if (num1>=num2) return 0 
    else {
    n = 0
    for (let x = num1; x < num2; x++) {

        n += x
    }
    return n
}
}

let output = computeSumBetween(2, 5);
console.log(output); // --> 9
