const btn = document.querySelector("#color-change-btn");
const randomColor = () => {
    let hexasDigits = "0123456789ABCDEF"
    let hash = "#"
    for (let i =0; i < 6; i++) {
        hash += hexasDigits[Math.floor(Math.random() * 16)];
    }
    return hash;
}
console.log(randomColor());
const changeRandomColor = () => {
    document.body.style.backgroundColor = randomColor();
}

btn.addEventListener("click", changeRandomColor);