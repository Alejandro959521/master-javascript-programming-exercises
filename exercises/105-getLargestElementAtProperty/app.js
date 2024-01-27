function getLargestElementAtProperty(obj, key) {
    // your code here
    if(!obj[key] || !Array.isArray(obj[key]) || obj[key].length < 1 ){
      return []
  }
  
 else {
  n=-999999999999999
       for (let x of obj[key]){
            if (x > n) n=x

       }
       return n    
 } 
    
}

let obj = {
  key: [1, 2, 4]
};
let output = getLargestElementAtProperty(obj, 'key');
console.log(output); // --> 4
