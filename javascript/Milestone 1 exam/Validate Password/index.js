const emailAndPasswordValidation = () => {
  const userEmail = document.getElementById("email").value;
  const userPass = document.getElementById("password").value;
  const displayMessage = document.getElementById("err");
  if (userEmail.includes("@gmail.com") && userPass.length >= 8) {
    displayMessage.innerText = "Valid email and password";
    displayMessage.style.color = "green";
  } else {
    displayMessage.innerText = "Invalid email or password!";
    displayMessage.style.color = "red";
  }
};

document
  .getElementById("btn")
  .addEventListener("click", emailAndPasswordValidation);
