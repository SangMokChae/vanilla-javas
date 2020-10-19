const a = 2, b = 4, c = 6 

const calculator = {
  plus: function(a, b, c) {
    return a + b + c;
  },
  minus: function(a, b, c) {
    return a - b - c;
  },
  multiply: function(a, b, c) {
    return a * b * c;
  },
  divide: function(a, b, c) {
    return a / b / c;
  },
  square: function(a, b, c) {
    return (a ** b) ** c;
  }
}

const plus = calculator.plus(a, b, c);
const minus = calculator.minus(a, b, c);
const multiply = calculator.multiply(a, b, c);
const divide = calculator.divide(a, b, c);
const square = calculator.square(a, b, c);

console.log(`plus: ${plus}, minus: ${minus}, multiply: ${multiply}, divide: ${divide}, square: ${square}.`)