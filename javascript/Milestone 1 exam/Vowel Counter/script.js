// let btn = document.getElementById(`submit-btn`);
// function vowelCalc() {
//   let userName = document.getElementById(`user-name`);
//   let result = document.getElementById(`vowel-result`);
//   for (let vowelCounter = 0; vowelCounter[userName.value]; vowelCounter++) {
//     if (
//       userName.value === "a" ||
//       userName.value === "i" ||
//       userName.value === "e" ||
//       userName.value === "o" ||
//       userName.value === "u"
//     ) {
//       vowelCounter++;
//     }
//     console.log(userName.value[vowelCounter]);
//   }
//
// }

// btn.addEventListener(`click`, vowelCalc);
let submitBtn = document.getElementById(`submit-btn`);
const vowelCalc = () => {
  let userName = document.getElementById(`user-name`).value;
  let result = document.getElementById(`vowel-result`);
  let count = 0;
  for (let vowelCounter = 0; vowelCounter < userName.length; vowelCounter++) {
    if (
      userName[vowelCounter] === "a" ||
      userName[vowelCounter] === "i" ||
      userName[vowelCounter] === "e" ||
      userName[vowelCounter] === "o" ||
      userName[vowelCounter] === "u"
    ) {
      count++;
    }
  }
  result.innerText = count;
  result.style.fontSize = "3em";
  result.style.fontWeight = "900";
  result.style.color = "#000";
  result.style.margin = "0px 0px 10px 40px";
  result.style.border = "2px solid";
  result.style.textAlign = "center";
};

submitBtn.addEventListener(`click`, vowelCalc);
