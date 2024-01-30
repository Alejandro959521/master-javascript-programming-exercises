function findSmallestElement(arr) {
    // your code here
if (arr.length < 1) return 0
else{
    y = Infinity
    for (let x of arr){
          
            if (x < y) y=x 

    }
return y
}

}

let output = findSmallestElement([4, 1, 9, 10]);
console.log(output); // --> 1