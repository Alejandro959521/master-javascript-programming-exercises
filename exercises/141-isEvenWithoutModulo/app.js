function isEvenWithoutModulo(num) {
    // your code here
    if (num === 0) return true

    else if (isNaN(num)) return NaN

    else if (num < 0) {
        let num3 = num * (-1)
        while (num3 >= 2) {
            num3 -= 2

        }
        if( num3 === 0) return true
        else return false

    } else {
        while (num >= 2) {
            num -= 2
        }
        if( num === 0) return true
        else return false
    }
}

let output = isEvenWithoutModulo(8);
console.log(output); // --> true
