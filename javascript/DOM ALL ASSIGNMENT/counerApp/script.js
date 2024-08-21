const decbtn = document.querySelector("#decrementbtn");
const incrementBtn = document.querySelector(`#incrementbtn`);
const displayShow = document.querySelector("#show");
const restBtn = document.querySelector(`.restBtn`);

// for decrement button
decbtn.addEventListener("click", () => {
  const value = Number(displayShow.innerText);
  if (value > 0) {
    displayShow.innerText = value - 1;
  } else {
    alert(" - number not allowed");
  }
});

// for increment button
incrementBtn.addEventListener("click", () => {
  const value1 = Number(displayShow.innerText);
  if (value1 >= 100) {
    alert(`100+ values are not allowed`);
  } else {
    displayShow.innerText = value1 + 1;
  }
});

// for rest button
restBtn.addEventListener("click", () => {
  displayShow.innerText = 0;
});
