function findShortestElement(arr) {
    // your code here

    if (arr.length === 0) return ""
    else{
        y=Infinity
        z=""
        for (let x of arr){
                          
           if (x.length < y) z=x; y=x.length

        } 
     return z
    }

}

let output = findShortestElement(['a', 'two', 'three']);
console.log(output); // --> 'a'