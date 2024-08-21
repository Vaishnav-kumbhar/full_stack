let firstColor = document.getElementById(`first-color`);
let secondColor = document.getElementById(`second-color`);
let button = document.getElementById(`pressBtn`);
let result = document.getElementById(`result`);

const colorMixer = () => {
  let newColor = firstColor.value + secondColor.value;
  switch (newColor) {
    case "redblue":
      result.style.background = "purple";
      break;
    case "redyellow":
      result.style.background = "orange";
      break;
    case "blueyellow":
      result.style.background = "green";
      break;
    case "bluered":
      result.style.background = "purple";
      break;
    case "yellowred":
      result.style.background = "orange";
      break;
    case "yellowblue":
      result.style.background = "green";
      break;
    case "default":
      alert("invalid color combination");
      break;
  }
};
button.addEventListener("click", colorMixer);

// end
