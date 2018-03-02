import React, { Component } from 'react';

import './index.css';
import MyCoinRow from '../MyCoinRow';

const demoValue = [
  {
    Symbol: 'BTC',
    Name: 'Bitcoin',
    PurchasedPrice: 1231,
    CurrentPrice: 1232,
    Volume: 321,
    Total: 123,
    Change: 10.1,
  },
  {
    Symbol: 'BTC',
    Name: 'Bitcoin',
    PurchasedPrice: 1231,
    CurrentPrice: 1232,
    Volume: 321,
    Total: 123,
    Change: -9.1,
  },
  {
    Symbol: 'BTC',
    Name: 'Bitcoin',
    PurchasedPrice: 1231,
    CurrentPrice: 1232,
    Volume: 321,
    Total: 123,
    Change: 10.1,
  },
];

class MyCoins extends Component {
  editCoin = () => {
    alert('Edit');
  }

  render() {
    return (
      <div className="MyCoins">
        <div className="MyCoins-Header">
          <p className="MyCoins-Header-Title">My Coins</p>
          <span className="MyCoins-Header-AddButton"><i className="fas fa-plus" /> Add Coin</span>
        </div>
        <table className="MyCoins-table" cellSpacing="0" cellPadding="0">
          <thead className="MyCoins-table-header">
            <tr>
              <th className="MyCoins-table-header-th">Coin</th>
              <th className="MyCoins-table-header-th">Name</th>
              <th className="MyCoins-table-header-th">Purchased Date</th>
              <th className="MyCoins-table-header-th">Current Price</th>
              <th className="MyCoins-table-header-th">Volume (24 Hr)</th>
              <th className="MyCoins-table-header-th">Total</th>
              <th className="MyCoins-table-header-th">Change</th>
              <th className="MyCoins-table-header-th">Edit</th>
            </tr>
          </thead>
          <tbody className="MyCoins-table-body">
            {demoValue.map(transaction => (<MyCoinRow
              transaction={transaction}
              editCoin={this.editCoin}
            />))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default MyCoins;
