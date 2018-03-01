import React, { Component } from 'react';
import './index.css';

class MyCoins extends Component {
  render() {
    return (
      <div className="MyCoins">
        <table className="MyCoins-table" cellSpacing="0" cellPadding="0">
          <thead>
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
          <tbody>
            <tr>
              <td>BTC</td>
              <td>BitCoin</td>
              <td>$534</td>
              <td>534</td>
              <td>2.3</td>
              <td>7675</td>
              <td>10.02%</td>
              <td>edit</td>
            </tr>
            <tr>
              <td>BTC</td>
              <td>BitCoin</td>
              <td>$534</td>
              <td>534</td>
              <td>2.3</td>
              <td>7675</td>
              <td>10.02%</td>
              <td>edit</td>
            </tr>
            <tr>
              <td>BTC</td>
              <td>BitCoin</td>
              <td>$534</td>
              <td>534</td>
              <td>2.3</td>
              <td>7675</td>
              <td>10.02%</td>
              <td>edit</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default MyCoins;
