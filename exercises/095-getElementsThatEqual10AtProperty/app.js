// Write your function here

function getElementsThatEqual10AtProperty (obj,key){

    const newarray = obj[key].filter(function(value){
    
        return value===10
    });

    return newarray


}


let obj = {
    key: [1000, 10, 50, 10]
  };
  let output = getElementsThatEqual10AtProperty(obj, 'key');
  console.log(output); // --> [10, 10]