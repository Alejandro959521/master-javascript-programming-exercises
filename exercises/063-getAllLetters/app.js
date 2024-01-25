function getAllLetters(str) {
    // your code here
    arr=[]
    for(let x of str){

        arr.push(x)
    }
return arr
    
}

let output = getAllLetters('Radagast');
console.log(output); // --> ['R', 'a', 'd', 'a', 'g', 'a', 's', 't']
