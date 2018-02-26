const axios = require('axios');

const Binance = require('binance-api-node').default;


const books = coin =>
// Authenticated client, can make signed calls
// client.time().then(time => console.log(time));
  axios.get('https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USDT').then((dataUSDT) => {
    const priceBTC = Number(dataUSDT.data.USDT);
    const client = Binance();
    return client.book({ symbol: `${coin}BTC` }).then((data) => {
      // console.log(data.asks,data.bids);
      let newDataAsks = data.asks;
      const finalData = {};
      newDataAsks = newDataAsks.map((item) => {
        const newItem = {};
        newItem.price = Number(item.price) * priceBTC;
        newItem.quantity = item.quantity;
        newItem.total = ((item.price * priceBTC) * item.quantity).toFixed(8);
        return newItem;
      });
      finalData.asks = newDataAsks;
      newDataAsks = data.bids;
      newDataAsks = newDataAsks.map((item) => {
        const newItem = {};
        newItem.price = Number(item.price) * priceBTC;
        newItem.quantity = item.quantity;
        newItem.total = ((item.price * priceBTC) * item.quantity).toFixed(8);
        return newItem;
      });
      finalData.bids = newDataAsks;
      // console.log(finalData);
      return finalData;
    });
  });

books('LTC').then(data => console.log(data.asks));

export default books;

