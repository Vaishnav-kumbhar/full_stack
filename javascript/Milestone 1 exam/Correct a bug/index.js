let numbers = [1, 2, 3, 4, 5, 6];

function quantityCount(items) {
  for (let i = 0; i < items.length; i++) {
    items[i] *= 2;
  }
  return items;
}

let newItem = quantityCount(numbers);
console.log(newItem);
