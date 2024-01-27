function getAverageOfElementsAtProperty(obj, key) {
  // your code here
  if (!obj[key] || obj[key].length == 0 || !Array.isArray(obj[key])) return 0
else{
    n=0
      for (let x of obj[key]){
          
        n+=x

      }
return n/obj[key].length
}
}
let obj = {
  key: [1, 2, 3]
};
let output = getAverageOfElementsAtProperty(obj, 'key');
console.log(output); // --> 2  