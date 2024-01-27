function repeatString(string, num) {
    // your code here
    let a = []

  for (let x=0; x<num;x++){

    a.push(string)
  }
    return a.join("")

}

let output = repeatString('code', 3);
console.log(output); // --> 'codecodecode'
