// Write your function here

function getFirstElementOfProperty (obj,str){

    if(!obj[str] || !Array.isArray(obj[str])) {
        return undefined
    }

    return obj[str][0]


}

let obj = {
    key: [1, 2, 4]
  };
  let output = getFirstElementOfProperty(obj, 'key');
  console.log(output); // --> 1