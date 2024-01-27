// Write your function here

function getElementsGreaterThan10AtProperty (obj,key){

    if(!obj[key] || obj[key].length == 0 || !Array.isArray(obj[key])) {
        return []
    }
    else{
    const newarray = obj[key].filter(function(value){
    
        return value>10
    });
  
    
     return newarray
    }

}

let obj = {
    key: [1, 20, 30]
  };
  let output = getElementsGreaterThan10AtProperty(obj, 'key');
  console.log(output); // --> [20, 30]