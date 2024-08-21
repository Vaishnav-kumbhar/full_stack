function returnDoubleElement(arr, fn) {
  let doubleArr = arr.map((el) => {
    return fn(el);
  });
  return doubleArr;
}

function callBack(el) {
  return el * 2;
}

const nums = [1, 2, 3, 4, 5];
const newArr = returnDoubleElement(nums, callBack);
console.log(newArr);