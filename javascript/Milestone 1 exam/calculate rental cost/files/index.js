function CalculateRentalCost() {
  let days = document.getElementById("days").value;
  let carName = document.getElementById("carName").value;
  let result = document.getElementById("cost");
  // if (carName === "economy") {
  //    let ecoCost = days * 4000;
  // }else if (carName === "Midsize") {
  //     ecoCost = days
  // }
     
  if (!days) {
result.innerText = 
  }

  switch (carName) {
    case "economy":
      result.innerText = days * 4000;
      break;
    case "midsize":
      result.innerText = days * 10000;
      break;
    case "Luxury":
      result.innerText = days * 20000;
      break;
  }
  result.style.color = "#6495ed";
  result.style.padding = "5px";
}

document.getElementById("btn").addEventListener("click", CalculateRentalCost);
