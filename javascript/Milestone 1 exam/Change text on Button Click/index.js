const text = document.querySelector("#text");
const changeTextOnClick = () => {
  if (text.innerText === "“The most affordable learning Platform“") {
    text.innerText = "“PW Skills”";
  } else {
    text.innerText = " “The most affordable learning Platform“";
  }
};

document.getElementById("change").addEventListener("click", changeTextOnClick);
