// find the sum of all digits that match the next digit in the list
const fs = require('fs');
const sequence = fs.readFileSync(__dirname + '/sequence.txt');

const formatInput = (seq) => {
  return seq.toString().split('');
}

const captcha = (seq) => {
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


console.log(captcha(sequence));