function getLongestElement(arr) {
    // your code here
    if (arr.length === 0) return ""
    else{
        y=0
        z=""
        for (let x of arr){
                          
           if (x.length > y) z=x; y=x.length

        } 
     return z
    }
    
}

let output = getLongestElement(['one', 'two']);
console.log(output); // --> 'three'
