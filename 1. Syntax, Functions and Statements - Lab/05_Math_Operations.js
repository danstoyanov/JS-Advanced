//'+', '-', '*', '/', '%', '**'

function calculate(num1, num2, inputFunc) {
  let currValue;

  if (inputFunc === "+") {
    currValue = num1 + num2;
  } else if (inputFunc === "-") {
    currValue = num1 - num2;
  } else if (inputFunc === "*") {
    currValue = num1 * num2;
  } else if (inputFunc === "/") {
    currValue = num1 / num2;
  } else if (inputFunc === "%") {
    currValue = num1 % num2;
  } else if (inputFunc === "**") {
    currValue = num1 ** num2;
  }

  console.log(currValue);
}

// JS complete !
calculate(3, 5.5, '*');