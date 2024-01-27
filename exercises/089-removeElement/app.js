// Write your function here

const removeElement = (array,n)=>{

    const newarray = array.filter(function(value){

        return value!==n

    });
    
return newarray

}


let output = removeElement([1, 2, 3, 2, 1], 2);
console.log(output); // --> [1, 3, 1]