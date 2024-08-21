let itemCart = [];
function cartItem() {
  const item = document.getElementById("user-item").value;
  let p = document.getElementById("alert");
  if (!item) {
    p.innerHTML = "Please Add Item";
    return;
  }

  if (!itemCart.includes(item)) {
    itemCart.push(item);
    p.innerText = "item is added";
  } else {
    p.innerText = "Item Is Already Added";
  }
  p.style.fontSize = "30px";
  p.style.color = "#fff";
}

document.getElementById("submit-button").addEventListener("click", cartItem);
