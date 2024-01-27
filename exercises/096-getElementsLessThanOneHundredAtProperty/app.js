// Write your function here

function getElementsLessThan100AtProperty (obj,key){
   
    if(!obj[key] || obj[key].length == 0 || !Array.isArray(obj[key])) {
        return []
    }
    else{
    const newarray = obj[key].filter(function(value){
    
        return value<100
    });
  
    
     return newarray
    }


}

let obj = {
    //   key: [1000, 20, 50, 500]
  };
  let output = getElementsLessThan100AtProperty(obj, 'key');
  console.log(output); // --> [20, 50]