const nums1 = 5;
const nums2 = 10;
function swap(num1, num2) {
  [num1, num2] = [[num2, num1]];
  console.log(num1, num2);
}

swap(nums1, nums2); // value swaped succesfully
