const dollerConvert = (itemPricesInDollers) => {
  let dollerExchange = 83;
  let converPrices = Object.entries(itemPricesInDollers).map(
    ([itemName, usdPrice]) => {
      let priceInRupees = usdPrice * dollerExchange;
      return [itemName, priceInRupees];
    }
  );

  const priceInIndianRupees = Object.fromEntries(converPrices);
  console.log(priceInIndianRupees);
};

const itemPricesInDollers = {
  book: 1,
  pen: 4,
  scale: 3,
  markale: 2,
  highlighter: 8,
};

dollerConvert(itemPricesInDollers);
