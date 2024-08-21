const numbers = [1, 2, 3, 4, 5, 6];

function checkNumber(numbers) {
  return function (num) {
    return numbers.includes(num);
  };
}

const finalResult = checkNumber(numbers);
console.log(finalResult(2));
console.log(finalResult(9));
