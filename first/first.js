// find the sum of all digits that match the next digit in the list
const fs = require('fs');
const sequence = fs.readFileSync(__dirname + '/sequence.txt');

const formatInput = (seq) => {
  return seq.toString().split('');
}

const partOne = (seq) => {
  seq = formatInput(seq)
  let sum = 0;
  seq.forEach((num, idx) => {
    if (num === seq[idx+1]) {
      sum += Number(num)
    } else if ((idx === (seq.length-1)) && (num === seq[0])) {
      sum += Number(num)
    }
  })
  return sum;
}

const partTwo = (seq) => {
  seq = formatInput(seq)
  const circularIdx = seq.length / 2;
  let sum = 0;
  seq.forEach((num, idx) => {
    if (idx + circularIdx > seq.length-1) {
      let checkIdx = (seq.length + idx) % circularIdx
      if (num === seq[checkIdx]) sum += Number(num)
    } else if (num === seq[idx+circularIdx]) {
      sum += Number(num)
    } 
  })
  return sum;
}

console.log(`Problem One answer: ${partOne(sequence)}`);
console.log(`Problem Two answer: ${partTwo(sequence)}`);
