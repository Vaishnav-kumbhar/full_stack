const calculateFinalOrder = (cartObject) => {
  totalCost = 0;
  for (let i = 0; i < cartObject.length; i++) {
    let item = cartItems[i];
    let itemCost = item.unitPrice * item.quanity;
    totalCost += itemCost;
  }
  return totalCost;
};

let cartItems = [
  { unitPrice: 10, quanity: 5 },
  { unitPrice: 20, quanity: 6 },
  { unitPrice: 30, quanity: 7 },
];

let finalPrice = calculateFinalOrder(cartItems);
console.log(finalCost);
