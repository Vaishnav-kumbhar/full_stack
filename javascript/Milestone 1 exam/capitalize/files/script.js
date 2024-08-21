function isCapitalize () {
let userName = document.getElementById("user-name");
let userNameFirstLetter = userName.value; 
 userNameFirstLetter.charAt(0).toUpperCase() ? console.log("correct") : userNameFirstLetter.innerText = userNameFirstLetter.charAt(0).toUpperCase();
}
