function ConverNumber(n) {
  try {
    let number = Number(n);
    if (isNaN(number)) {
      console.log(`invalid number!`);
    } else {
      console.log(number);
    }
  } catch {}
}

ConverNumber("abc");
ConverNumber("123");
