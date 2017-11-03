const readline = require('readline');

const reader = readline.createInterface ({
  input: process.stdin,
  output: process.stdout
});

const cb = function(sum) {
  console.log(`Total Sum: ${sum}`);
};

function addNumbers(sum, numsLeft, completionCallback) {
  if (numsLeft > 0) {
    reader.question('Pick a number: ', function(number) {
      sum += parseInt(number);
      addNumbers(sum, numsLeft-1, completionCallback);
    });
  } else {
    completionCallback(sum);
    reader.close();
  }
}

addNumbers();
