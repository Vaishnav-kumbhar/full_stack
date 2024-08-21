// print the number that divisle by 3 but not by 2

const numbers = [3, 4, 5, 6, 7, 8, 9, 15, 12];
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    continue;
  } else if (numbers[i] % 3 === 0) {
    console.log(numbers[i]);
  }
}
// ouput
// 3,9,15
