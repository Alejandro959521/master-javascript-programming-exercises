function filterEvenLengthWords(words) {
    // your code here
    
    const newarray = words.filter(function(value){
    
        return value.length%2===0

    });
    
return newarray

}

let output = filterEvenLengthWords(['word', 'words', 'word', 'words']);
console.log(output); // --> ['word', 'word']
