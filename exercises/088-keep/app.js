// Write your function here

function keep (array,n){

    const newarray = array.filter(function(value){

        return value===n

    });
    
return newarray
}

let output = keep([1, 2, 3, 2, 1], 2) 
console.log(output); // --> [2, 2]