const submitBtn = document.querySelector("#submit-btn");

function urlValidate() {
  const url = document.querySelector("#Profile").value;
  const pattern = / "https:/ / "-" / / "& "/i;
  if (url.match(pattern)) {
    alert("valid url");
  } else {
    alert("url is invalid");
  }
}

submitBtn.addEventListener("click", urlValidate);
// https://www.linkedin.com/in/vaishnav-kumbhar-1269a3236?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app
