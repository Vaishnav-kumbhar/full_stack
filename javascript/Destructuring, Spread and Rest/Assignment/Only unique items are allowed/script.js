const nums = [1, 2, 3, 4, 4, 5, 3, 6, 2, 7];
const removeDuplicates = () => {
  const numSet = new Set(nums);
  return numSet;
};

const newNums = removeDuplicates();
console.log(newNums);
