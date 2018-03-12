import React, { Component } from 'react';

import './index.css';
import MyCoinRow from '../MyCoinRow';
import AddCoinModal from './../AddCoinModal';

const demoValue = [
  {
    Symbol: 'BTC',
    Name: 'Bitcoin',
    Quantity: 0.11,
    CurrentPrice: 1232,
  },
  {
    Symbol: 'ETH',
    Name: 'Etherium',
    Quantity: 0.12,
    CurrentPrice: 1232,
  },
];

class MyCoins extends Component {
  state = {
    open: false,
    modifyType: null,
  };

  onOpenAddModal = () => {
    this.setState({ open: true, modifyType: 'addCoin' });
  };

  onOpenRemoveModal = () => {
    this.setState({ open: true, modifyType: 'removeCoin' });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <div className="MyCoins">
        <AddCoinModal
          state={this.state.open}
          modifyType={this.state.modifyType}
          onCloseModal={this.onCloseModal}
        />
        <div className="MyCoins-Header">
          <p className="MyCoins-Header-Title">My Coins</p>
          <span className="MyCoins-Header-ModifyButton" onClick={this.onOpenAddModal} role="presentation"><i className="fas fa-plus" />&nbsp;&nbsp;Add Coin</span>&nbsp;&nbsp;&nbsp;
          <span className="MyCoins-Header-ModifyButton" onClick={this.onOpenRemoveModal} role="presentation"><i className="fas fa-trash" />&nbsp;&nbsp;Remove Coin</span>
        </div>
        <table className="MyCoins-table" cellSpacing="0" cellPadding="0">
          <thead className="MyCoins-table-header">
            <tr>
              <th className="MyCoins-table-header-th">Coin</th>
              <th className="MyCoins-table-header-th">Name</th>
              <th className="MyCoins-table-header-th">Quantity</th>
              <th className="MyCoins-table-header-th">Current Price</th>
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
