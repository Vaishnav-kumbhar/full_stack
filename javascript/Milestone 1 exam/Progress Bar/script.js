const bar = document.querySelector(".bar");
document.addEventListener("scroll", () => {
  bar.style.backgroundColor = "red";
  bar.style.transition = "ease in, 2s";
});
