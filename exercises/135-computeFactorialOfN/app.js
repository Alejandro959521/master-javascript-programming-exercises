function computeFactorialOfN(n) {
    // your code here
    f=1
    for (let x=1 ;x<=n; x++){

        f*=x
    }
    return f
}

let output = computeFactorialOfN(3);
console.log(output); // --> 24
