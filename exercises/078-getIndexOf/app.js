// Write your function here


function getIndexOf (letter,frase){
    let cont = -1
    let array = []
    for (let value of frase){
        cont++
        if (value == letter){

            array.push(cont)
        }
    }
        if ( cont == -1  || array.length===0) return -1
        else return array[0]

}
let output = getIndexOf('a', 'I am a hacker');
console.log(output); // --> 2