function getEvenLengthWordsAtProperty(obj, key) {
    // your code here
    if(!obj[key] || obj[key].length == 0 || !Array.isArray(obj[key])) {
      return []
  }
  else{
  const newarray = obj[key].filter(function(value){
  
      return value.length%2===0
  });

  
   return newarray
  }

}

let obj = {
  key: ['a', 'long', 'game']
};
let output = getEvenLengthWordsAtProperty(obj, 'key');
console.log(output); // --> ['long', 'game']
