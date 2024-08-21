// adding event listner on submit button
const Password = document.querySelector(`#pass`);
console.log(pass);
const confirmPassword = document.querySelector(`#pass2`);
const submitBtn = document.querySelector(`#submitBtn`);
console.log(submitBtn);

submitBtn.addEventListener("click", () => {
  if (Password.value === confirmPassword.value) {
    alert(`Password Matched. Password validation Successful `);
  } else {
    alert(`Password didn't match. Password validation unsuccessful`);
  }
});
