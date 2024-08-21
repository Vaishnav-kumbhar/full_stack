const nums = [1, 2, 3, 4, 5];
const accessRandomElement = (nums) => {
  const newNums = Array.from(nums);
  let [first, second, ...args] = newNums;
  let lastIndex = args.pop();
  console.log([first, second, lastIndex])
};

accessRandomElement(nums); // extract value Succesfully 
