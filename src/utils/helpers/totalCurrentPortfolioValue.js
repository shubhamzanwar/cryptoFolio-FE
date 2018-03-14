const totalValue = (price, investment) => investment.reduce((total, eachInvestment) => {
  let totalCopy = total;
  totalCopy += eachInvestment.quantity * price[eachInvestment.coinSymbol];
  return totalCopy;
}, 0);
export default totalValue;
