function filterOddLengthWords(words) {
    // your code here

    

        const newarray = words.filter(function(value){
    
            return value.length%2!=0
    
        });
        
    return newarray
    
    
    
}

let output = filterOddLengthWords(['there', 'it', 'is', 'now']);
console.log(output); // --> ['there', 'now']
