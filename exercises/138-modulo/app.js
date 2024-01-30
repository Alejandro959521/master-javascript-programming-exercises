function modulo(num1, num2) {
    if (num2 === 0) return NaN

    else if (isNaN(num1) || isNaN(num2)) return NaN

    else if (num1 < 0) {
        num3 = num1 * (-1)
        while (num3 >= num2) {
            num3 -= num2

        }
        return num3 * (-1)

    } else {
        while (num1 >= num2) {
            num1 -= num2
        }
        return num1
    }
}
let output = modulo(4, 2);
console.log(output); // --> 1
