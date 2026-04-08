let firstNum = '';
let secondNum = '';
let operator = '';
let isSecond = false;

const display = document.querySelector('.display');
const equation = document.querySelector('.equation');
const clear = document.querySelector('.clear');

const buttons = document.querySelectorAll('.num');
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    if(!isSecond) {
      firstNum += button.textContent;
    } else {
      secondNum += button.textContent;
    }

    equation.textContent = `${firstNum} ${operator} ${secondNum}`;
  });
});

const operatorButton = document.querySelectorAll('.operator');
operatorButton.forEach((operators) => {
  operators.addEventListener('click', () => {
    operator = operators.textContent;
    isSecond = true;

    equation.textContent = `${firstNum} ${operator}`;
  });
});

/*
const operators = document.querySelector('.operator');
operators.addEventListener('click', () => {
  operator = operators.textContent;
  isSecond = true;
  console.log('Operators', operator);
});
*/

const equalButton = document.querySelector('.equal');
equalButton.addEventListener('click', () => {

  const num1 = Number(firstNum);
  const num2 = Number(secondNum);
  let result = 0;

    if(operator === '+') {
      result = num1 + num2;
    } else if (operator === '-') {
      result = num1 - num2;
   } else if (operator === '*') {
      result = num1 * num2;
   } else if (operator === '/') {
      result = num1 / num2;
   } else if (operator === '%') {
      result = num1 % num2;
   }

   display.innerHTML = result;

   equation.textContent = `${firstNum} ${operator} ${secondNum}`;

   firstNum = result.toString();
   secondNum = '';
   operator = '';
   isSecond = false;
});

clear.addEventListener('click', () => {
  firstNum = '';
  secondNum = '';
  operator = '';
  isSecond = false;
  display.textContent = '';
  equation.textContent = '0';
});
