// let obj = {
//     firstName: "Rafael",
//     lastName: "Leao",
//     country: "Italy",
//     city: "Milan",
//     phoneNum: "123-456-789",
//     jerseyNum: 27
// }

// function countNumberOfKeys(obj) {
//     // your code here
//    cont=0
//     for (let key in obj){
//     cont++
        
//     }
// return cont
// }

// let output = countNumberOfKeys(obj);
// console.log(output); // --> 6
let obj = {
    firstName: "Rafael",
    lastName: "Leao",
    country: "Italy",
    city: "Milan",
    phoneNum: "123-456-789",
    jerseyNum: 27
}

function countNumberOfKeys(obj) {
    // your code here
    return Object.keys(obj).length
}

let output = countNumberOfKeys(obj);
console.log(output); // --> 6
