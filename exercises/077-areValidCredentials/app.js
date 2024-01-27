// Write your function here

function areValidCredentials (N,ps){


    return N.length>=3 && ps.length>=8

}

let output = areValidCredentials('Ritu', 'mylongpassword')
console.log(output); // --> true