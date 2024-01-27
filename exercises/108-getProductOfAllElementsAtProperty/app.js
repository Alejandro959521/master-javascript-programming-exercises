function getProductOfAllElementsAtProperty(obj, key) {
    // your code here

    if(!obj[key] || !Array.isArray(obj[key]) || obj[key].length < 1 ){
      return 0
  }else {
    n=1
    for (let x of obj[key]){

        n*=x
    }
    return n
}
}
let obj = {
  key: [1, 2, 3, 4]
};
let output = getProductOfAllElementsAtProperty(obj, 'key');
console.log(output); // --> 24
