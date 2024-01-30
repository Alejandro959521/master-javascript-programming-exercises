function findShortestWordAmongMixedElements(arr) {
    // your code here

    if (arr.length === 0) return ""
    else {
        y = Infinity;
        z = "";
        for (let x of arr) {

            if (x.length < y && typeof x === "string") {
                z = x; y = x.length
            }
        }
        return z
    }

}

let output = findShortestWordAmongMixedElements([4, 'two', 2, 'three']);
console.log(output); // --> 'two'
