// convert celsius to faherenheit
const convetCelsiusToF = () => {
  let userInput = document.getElementById("num").value;
  let result = document.getElementById("result");
  let faherenheit = userInput * 1.8 + 32;
  result.innerText = `celsuis n is ${userInput} and faherenheit is ${faherenheit}`;
};

document.getElementById("btn").addEventListener("click", convetCelsiusToF);
