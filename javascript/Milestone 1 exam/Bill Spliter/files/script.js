const price = () => {
  let amnt = document.querySelector("#amnt").value;
  let peopleOfSharing = document.querySelector("#people").value;
  let result = document.getElementById("result");
  if (amnt > 0) {
    result.innerText = `total ammount is ${amnt} and people of sharing is ${peopleOfSharing} each person has to pay ${amnt / peopleOfSharing}`;
  }
  result.style.fontSize = "2em";
};

document.getElementById("btn").addEventListener("click", price);