export const calcTipPerPerson = (currentBill, currentTip, currentPeople) => {
  return (currentBill * (currentTip / 100)) / currentPeople;
};

export const calcTotalPerPerson = (currentBill, currentTip, currentPeople) => {
  const tipAmount = currentBill * (currentTip / 100);
  const amount = currentBill + tipAmount;
  console.log(tipAmount, amount);
  return amount / currentPeople;
};
