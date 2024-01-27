function getSquaredElementsAtProperty(obj, key) {
    // your code here
    if(!obj[key] || !Array.isArray(obj[key])) {
      return []
  }
  else{
  const newarray = obj[key].map(function(value){
  
      return Math.pow(value, 2)
  });

  
   return newarray
  }


}

let obj = {
  key: [2, 1, 5]
};
let output = getSquaredElementsAtProperty(obj, 'key');
console.log(output); // --> [4, 1, 25]
