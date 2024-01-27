// Write your function here
function getOddLengthWordsAtProperty (obj,key){


    if(!obj[key] || obj[key].length == 0 || !Array.isArray(obj[key])) {
        return []
    }
    else{
    const newarray = obj[key].filter(function(value){
    
        return value.length%2!==0
    });
  
    
     return newarray
    }

}

let obj = {
    key: ['It', 'has', 'some', 'words']
  };
  let output = getOddLengthWordsAtProperty(obj, 'key');
  console.log(output); // --> ['has', 'words']