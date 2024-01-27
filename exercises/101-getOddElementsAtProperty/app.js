function getOddElementsAtProperty(obj, key) {
    // your code here
    
    if(!obj[key] || !Array.isArray(obj[key])) {
      return []
  }
  else{
  const newarray = obj[key].filter(function(value){
  
      return value%2!==0
  });

  
   return newarray
  }

}

let obj = {
  key: [1, 2, 3, 4, 5]
};
let output = getOddElementsAtProperty(obj, 'key');
console.log(output); // --> [1, 3, 5]
