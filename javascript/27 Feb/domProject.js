const btn = document.getElementById(`button`);
console.log(btn);

const randomColor = () => {
  let num = `0123456789ABCDEF`;
  let sym = `#`;

  for (let cont = 0; cont < 6; cont++) {
    sym = sym + num[Math.floor(Math.random() * 16)];
  }

  return sym;
};
console.log(randomColor());

const colorChanger = () => {
  document.body.style.backgroundColor = randomColor();
};
btn.addEventListener(`click`, colorChanger);
