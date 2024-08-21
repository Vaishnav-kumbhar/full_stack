const CaluculatePercentage = (x) => {
  let OrignalPrice = 100000;
  let finalPrice;
  if (x === "camera") {
    finalPrice = (OrignalPrice * 10) / 100;
    console.log(`your save money RS`, finalPrice);
  } else if (x === "tv") {
    finalPrice = (OrignalPrice * 8) / 100;
    console.log(`your save money RS`, finalPrice);
  } else if (x === "laptop") {
    finalPrice = (OrignalPrice * 5) / 100;
    console.log(`your save money RS`, finalPrice);
  } else {
    console.log(`No product mathced in our system`);
  }
};

CaluculatePercentage("laptop");
