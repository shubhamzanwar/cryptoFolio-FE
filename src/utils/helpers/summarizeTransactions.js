const summarizeTransactions = (transactionsObject) => {
  const userId = Number(window.localStorage.getItem('cryptouserid'));
  let totalInvested = 0;
  let totalSold = 0;

  const transactions = Object.values(transactionsObject).map((coinTransactions) => {
    const { coinName } = coinTransactions[0];
    const { coinSymbol } = coinTransactions[0];
    let quantity = 0;
    let invested = 0;
    let sold = 0;

    coinTransactions.forEach((transaction) => {
      if (transaction.quantity > 0 && transaction.toId === userId) {
        quantity += transaction.quantity;
        invested += transaction.quantity * transaction.price;
      } else {
        quantity -= Math.abs(transaction.quantity);
        sold += transaction.quantity * transaction.price * -1;
      }
    });
    totalInvested += invested;
    totalSold += sold;
    return {
      coinName,
      coinSymbol,
      quantity,
      invested,
      sold,
    };
  });
  const filteredTransactions = Object.values(transactions).filter((transaction) => {
    if (transaction.quantity > 0) return true;
    return false;
  });
  return [filteredTransactions, totalInvested, totalSold];
};
export default summarizeTransactions;
