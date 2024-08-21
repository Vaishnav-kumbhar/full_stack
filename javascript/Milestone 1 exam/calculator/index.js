let caclulateBtn = document.getElementById(`Calculate-btn`);
const caclulator = () => {
  let firstNumber = document.getElementById(`first-number`);
  let secondNumber = document.getElementById(`second-number`);
  let operator = document.getElementById(`operator`);
  let result = document.getElementById(`result`);

  switch (operator.value) {
    case "+":
      result.innerText = firstNumber.value + secondNumber.value;
      break;
    case "-":
      result.innerText = firstNumber.value - secondNumber.value;
      break;
    case "*":
      result.innerText = firstNumber.value * secondNumber.value;
      break;
    case "/":
      result.innerText = firstNumber.value / secondNumber.value;
      break;

    case "default":
      alert(`invalid Operator`);
      break;
  }

  result.style.fontSize = "2em";
  result.style.fontWeight = "900";
  result.style.border = "2px solid";
  result.style.backgroundColor = "#fff";
};

caclulateBtn.addEventListener(`click`, caclulator);
