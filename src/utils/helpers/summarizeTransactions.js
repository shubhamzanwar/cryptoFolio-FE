const summarizeTransactions = (transactionsObject) => {
  let totalInvested = 0;
  const transactions = Object.values(transactionsObject).map((coinTransactions) => {
    const { coinName } = coinTransactions[0];
    const { coinSymbol } = coinTransactions[0];
    let quantity = 0;
    let invested = 0;

    coinTransactions.forEach((transaction) => {
      quantity += transaction.quantity;
      invested += transaction.quantity * transaction.price;
    });
    totalInvested += invested;
    return {
      coinName,
      coinSymbol,
      quantity,
      invested,
    };
  });
  const filteredTransactions = Object.values(transactions).filter((transaction) => {
    if (transaction.quantity > 0) return true;
    return false;
  });
  return [filteredTransactions, totalInvested];
};
export default summarizeTransactions;
