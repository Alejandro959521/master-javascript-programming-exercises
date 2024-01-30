function getLengthOfShortestElement(arr) {
    // your code here
    if (arr.length === 0) return 0
    else{
        y=Infinity
        for (let x of arr){
                     
           
           if (x.length < y) y=x.length

        }
     return y
    }
    
}

let output = getLengthOfShortestElement(['one', 'two', 'three']);
console.log(output); // --> 3
