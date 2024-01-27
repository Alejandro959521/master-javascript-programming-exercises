// Write your function here

const getNthElementOfProperty = (obj,key,n)=>{

  if(!obj[key] || !Array.isArray(obj[key])) {
    return undefined
}

return obj[key][n]


}





let obj = {
    key: [1, 2, 6]
  };
  let output = getNthElementOfProperty(obj, 'key', 1);
  console.log(output); // --> 2 