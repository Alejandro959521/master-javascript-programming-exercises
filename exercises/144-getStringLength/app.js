function getStringLength(string) {
    // your code here
    n = 0
    for (let x of string) {

        n++
    }
    return n
}

let output = getStringLength('hello');
console.log(output); // --> 5
