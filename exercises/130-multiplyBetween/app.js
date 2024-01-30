function multiplyBetween(num1, num2) {
    // your code here
    if (num1>=num2) return 0 
    else {
    n = 1
    for (let x = num1; x < num2; x++) {

        n *= x
    }
    return n
}
}

let output = multiplyBetween(2, 5);
console.log(output); // --> 24
