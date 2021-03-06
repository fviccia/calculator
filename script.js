function add(n1,n2) {
  res = n1+n2;
  return res;
}
function subtract(n1,n2) {
  res = n1-n2;
  return res;
}
function multiply(n1,n2) {
  res = n1*n2;
  return res;
}
function divide(n1,n2) {
  res = n1/n2;
  return res;
}

function operate(operator,n1,n2) {
  console.log(operator);
  n1 = parseFloat(n1);
  n2 = parseFloat(n2);

  if (operator=="+") {
  res = add(n1,n2);
    return res;
  } else if (operator=="-") {
  res = subtract(n1,n2);
    return res;
  } else if (operator=="*") {
  res = multiply(n1,n2);
    return res;
  } else if (operator=="/") {
    if (n2 == 0){
      res = 'You cannot divide by zero.';
      return res;
    }
  res = divide(n1,n2);
    return res;
  }
  
}

let disp = document.getElementById('display');

document.getElementById("1").addEventListener("click", function(){numPress('1');});
document.getElementById("2").addEventListener("click", function(){numPress('2');});
document.getElementById("3").addEventListener("click", function(){numPress('3');});
document.getElementById("4").addEventListener("click", function(){numPress('4');});
document.getElementById("5").addEventListener("click", function(){numPress('5');});
document.getElementById("6").addEventListener("click", function(){numPress('6');});
document.getElementById("7").addEventListener("click", function(){numPress('7');});
document.getElementById("8").addEventListener("click", function(){numPress('8');});
document.getElementById("9").addEventListener("click", function(){numPress('9');});
document.getElementById("0").addEventListener("click", function(){numPress('0');});
document.getElementById("00").addEventListener("click", function(){numPress('00');});
document.getElementById("dot").addEventListener("click", function(){
  if (decimalControl == 0){
    numPress('.');
  }
});

document.getElementById("plus").addEventListener("click", function(){
  operatorPress('+');
  });
document.getElementById("minus").addEventListener("click", function(){
  operatorPress('-');
  });
document.getElementById("divide").addEventListener("click", function(){
  operatorPress('/');
  });
document.getElementById("multiply").addEventListener("click", function(){
  operatorPress('*');
  });
document.getElementById("space").addEventListener("click", function(){
  equalPress();});

let display = '';
let operator = '';
let firstNumber = 0;
let secondNumber = '';
let opControl = 0;
let numControl = 0;
let decimalControl = 0;
let res = '';


function setDis() {
  disp.innerHTML = display;
}

function numPress(element) {
  if (element == '.'){
    decimalControl = 1;
  }
  if (numControl == 0){
    display+=element;
    setDis(display);
  }
  if (numControl == 1){
    display = '';
    display+=element;
    setDis(display);
    numControl = 0;
  }
}

function operatorPress(sign) {
  decimalControl = 0;
  if (opControl == 1){
    equalPress();
  }
  operator = sign;
  numControl = 1;
  opControl = 1;
  firstNumber = display;
}

function equalPress() {
  decimalControl = 0;
  secondNumber = display;
  operate(operator,firstNumber,secondNumber);
  display = res;
  setDis(display);

}

// Clear display and reset all variables.
document.getElementById("clear").addEventListener("click", function(){
  display = '';
  operator = '';
  firstNumber = '';
  secondNumber = '';
  opControl = 0;
  numControl = 0;
  res = 0;
  decimalControl = 0;
  setDis();
});


// Clear last digit on display and display variable
document.getElementById("back").addEventListener("click", back);
function back() {
  display = display.slice(0, -1);
  setDis(display);
}




