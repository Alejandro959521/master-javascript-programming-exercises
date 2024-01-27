function addToBackOfNew(arr, element) {
    // your code here
    newarr=[]
    for (let x of arr){

        newarr.push(x)
    }
    newarr2=newarr.push(element)
    return  newarr
}

let input = [1, 2];
let output = addToBackOfNew(input, 3);
//console.log(input); // --> [1, 2]
console.log(output); // --> [1, 2, 3]
