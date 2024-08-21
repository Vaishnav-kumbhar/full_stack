const userDetails = {
  name: "Rohit",
  bankBalance: 50000,
};

const moneyDeposite = (userDetails, amnt) => {
  userDetails.bankBalance += amnt;
  console.log(userDetails);
};

const withdrowMoney = (userDetails, amnt) => {
  if (amnt <= userDetails.bankBalance) {
    userDetails.bankBalance -= amnt;
    console.log(userDetails)
  } else {
    console.log(`insufficient balance`);
  }
};

moneyDeposite(userDetails, 400);
withdrowMoney(userDetails, 45000);
