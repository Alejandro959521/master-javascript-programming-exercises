function countCharacter(str, char) {
    // your code here
    cont=0
    for (let x of str){

            if (x===char) cont+=1

    }
    return cont   
}


let output = countCharacter('I am a hacker', 'a');
console.log(output); // --> 3
