function removeProperty(obj, key) {
  // your code here
  return obj[key]=undefined
  

}
let obj = {
  name: 'Sam',
  age: 20
}
removeProperty(obj, 'name');
console.log(obj.name); // --> undefined