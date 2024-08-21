let products = [
  { name: "shirt", Category: "Clothing" },
  { name: "pants", Category: "Clothing" },
  { name: "hat", Category: "Accessories" },
  { name: "Sunglasses", Category: "Accessories" },
];

function filterByCategory(products) {
  return (Category) => {
    return products.filter((product) => {
      return product.Category === Category;
    });
  };
}

let clothingProducts = filterByCategory(products)("Clothing");

console.log(clothingProducts);
