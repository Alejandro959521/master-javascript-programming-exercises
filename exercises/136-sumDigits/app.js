function sumDigits(num) {
    // your code here
    let num2 = num.toString()
    console.log(num2)
    add = 0
    for (let x = 0; x < num2.length; x++) {
        if (num2[x] === "-") {
                add-=Number(num2[x+1]) 
                x++
        }
        else add += Number(num2[x])
    }
    return add
}
let output = sumDigits(-316);
console.log(output); // --> 4


  