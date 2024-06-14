

// test.js
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function calculate(firstNumber, secondNumber, operator) {
  let result;
  firstNumber = Number(firstNumber);
  secondNumber = Number(secondNumber);

  switch (operator) {
    case '+':
      result = firstNumber + secondNumber;
      break;
    case '-':
      result = firstNumber - secondNumber;
      break;
    case '*':
      result = firstNumber * secondNumber;
      break;
    case '/':
      if (secondNumber !== 0) {
        result = firstNumber / secondNumber;
      } else {
        throw new Error('Error! Division by zero.');
      }
      break;
    default:
      throw new Error('Invalid operator!');
  }

  return result;
}

rl.question('Enter the first number: ', (firstNumber) => {
  rl.question('Enter the second number: ', (secondNumber) => {
    rl.question('Enter the operator ( +, -, *, / ): ', (operator) => {
      try {
        const result = calculate(firstNumber, secondNumber, operator);
        console.log(`The result is: ${result}`);
      } catch (error) {
        console.log(error.message);
      } finally {
        rl.close();
      }
    });
  });
});

module.exports = calculate;