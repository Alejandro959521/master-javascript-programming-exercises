// Write your function here

function computeAverageOfNumbers (value){
    if (value.length == 0) return 0;
    prom=0
    for(let x of value){

            prom+=x
    }
return prom/value.length
}
let input = [1, 2, 3, 4, 5];
let output = computeAverageOfNumbers(input);
console.log(output); // --> 3