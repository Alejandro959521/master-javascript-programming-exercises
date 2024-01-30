// Write your function here

const countAllCharacters= (str)=> {
    
    obj={}
    for (let x of str){

        if(obj[x])  obj[x]+=1
        else  obj[x]=1
       

    }

 return obj
}

let output = countAllCharacters('banana');
console.log(output); // --> {b: 1, a: 3, n: 2}