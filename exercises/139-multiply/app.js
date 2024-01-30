function multiply(num1, num2) {
    // your code her
    if (num1 === 0 || num2 === 0) return 0

    else if (num1 < 0 && num2 < 0) {
        sum = 0
        cont = 0
        num3 = -num2
        num4 = -num1
        while (num4 > cont) {

            sum += num3
            cont++
        }
        return sum
    }

    else if (num1 > 0 && num2 < 0) {
        sum = 0
        cont = 0
        num3 = -num2
        while (num1 > cont) {

            sum += num3
            cont++
        }
        return -sum
    }
    else if (num1 < 0 && num2 > 0) {
        sum = 0
        cont = 0
        num3 = -num1
        while (num3 > cont) {

            sum += num2
            cont++
        }
        return -sum

    }
    else {
        sum = 0
        cont = 0
        while (num1 > cont) {

            sum += num2
            cont++
        }
        return sum
    }
}

let output = multiply(-4, -7);
console.log(output); // --> 28
