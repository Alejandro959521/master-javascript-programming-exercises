function getEvenElementsAtProperty(obj, key) {
    // your code here

    if(!obj[key] || !Array.isArray(obj[key])) {
      return []
  }
  else{
  const newarray = obj[key].filter(function(value){
  
      return value%2===0
  });

  
   return newarray
  }
    
}

let obj = {
  key: [1000, 11, 50, 17]
};
let output = getEvenElementsAtProperty(obj, 'key');
console.log(output); // --> [1000, 50]
