const fs = require('fs');
const input = fs.readFileSync(__dirname + '/spreadsheet.txt');

const formatInput = (input) => {
  const newArray = [];
  input = input.toString().split("\n");
  
  input.forEach(line => {
    line = line.split(' ');   
    line.forEach((item, idx) => {
      if (!item) line.splice(idx, 1);
    })
    newArray.push(line);
  })

  return newArray;
} 

const partOne = (arr) => {
  let sum = 0;
  
  arr.forEach(line => {
    line = line.sort((a, b) => a-b);
    sum += (line[line.length-1] - line[0]);
  })

  return sum;
}

const partTwo = (arr) => {
  let sum = 0;
  
  arr.forEach(line => {
    line = line.sort((a, b) => a-b);   
    for (let i=0; i<line.length; i++) {
      for (let j=i+1; j<line.length; j++) {
        if (line[j] % line[i] === 0) sum += (line[j] / line[i])
      }
    }
  })

  return sum
}

console.log(`Part One answer ${partOne(formatInput(input))}`)
console.log(`Part One answer ${partTwo(formatInput(input))}`)