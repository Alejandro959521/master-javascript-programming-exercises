function getSumOfAllElementsAtProperty(obj, key) {
    // your code here

    if(!obj[key] || !Array.isArray(obj[key]) || obj[key].length < 1 ){
        return 0
    }else {
n=0
    for (let x of obj[key]){
        n+=x

    }
    return n
}
}

let obj = {
    key: [4, 1, 8]
};
let output = getSumOfAllElementsAtProperty(obj, 'key');
console.log(output); // --> 13
