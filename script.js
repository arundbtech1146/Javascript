const display = document.getElementById("display");
const buttons = Array.from(document.getElementsByClassName("num"));
const operators = Array.from(document.getElementsByClassName("operator"));
const clear = document.getElementById("clear");
const equals = document.getElementById("equals");
let currentNum = '';
let prevNum = '';
let result = null;
let currentOperator = null;

buttons.map( button => {
  button.addEventListener("click", (e) => {
    currentNum += e.target.value;
    display.value = currentNum;
  });
});

operators.map( operator => {
  operator.addEventListener("click", (e) => {
    if (currentOperator !== null) calculate();
    currentOperator = e.target.value;
    prevNum = currentNum;
    currentNum = '';
  });
});

equals.addEventListener("click", () => {
  if (currentOperator === null || prevNum === '') return;
  calculate();
  currentOperator = null;
});

clear.addEventListener("click", () => {
  currentNum = '';
  prevNum = '';
  result = null;
  currentOperator = null;
  display.value = "0";
});

function calculate() {
  result = eval(prevNum + currentOperator + currentNum);
  display.value = result;
  currentNum = result.toString();
  prevNum = '';
}