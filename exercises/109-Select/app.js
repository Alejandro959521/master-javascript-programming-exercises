// Write your function here

function select (arr,obj) {
    
object ={}

for (let x of arr){
  
if(obj[x]) object[x]=obj[x]

}
return object
}

let arr = ['a', 'c', 'e'];
let obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4
};
let output = select(arr, obj);
console.log(output); // --> { a: 1, c: 3 }