function getLongestWordOfMixedElements(arr) {
    // your code here

    if (arr.length === 0) return ""
    else{
        y=0
        z=""
        for (let x of arr){
                          
           if (x.length > y && typeof x === "string") 
           {
            z=x
             y=x.length
           }       
        } 
     return z
    }
    
}
    


let output = getLongestWordOfMixedElements([3, 5, 3, 1]);
console.log(output); // --> 'word'
