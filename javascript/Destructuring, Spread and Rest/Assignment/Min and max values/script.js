function maxAndMinNums(numbers) {
  const min = Math.min(...numbers);
  const max = Math.max(...numbers);
  return { min, max };
}

const numbers = [1, 25, 10, 15];
const minMaxValue = maxAndMinNums(numbers);
console.log(minMaxValue);
// Expected Output: -> {min: 1, max:25};