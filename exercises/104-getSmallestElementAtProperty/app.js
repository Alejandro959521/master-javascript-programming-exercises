function getSmallestElementAtProperty(obj, key) {
    // your code here

    if(!obj[key] || !Array.isArray(obj[key]) || obj[key].length < 1 ){
      return []
  }
  
 else {
  n=Infinity
       for (let x of obj[key]){
            if (x < n) n=x

       }
       return n    
 }  
}

let obj = {
  key: [2,1,5]
};
let output = getSmallestElementAtProperty(obj, 'key');
console.log(output); // --> 1
