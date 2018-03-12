import React, { Component } from 'react';

import './index.css';
import MyCoinRow from '../MyCoinRow';
import AddCoinModal from './../AddCoinModal';


class MyCoins extends Component {
  constructor(props) {
    super(props);
    this.state = {
      transactions: [],
      open: false,
      modifyType: null,
    };
  }

  componentWillReceiveProps(nextProps) {
    this.updateState(nextProps.userTransactions);
  }

  onOpenAddModal = () => {
    this.setState({ open: true, modifyType: 'addCoin' });
  };

  onOpenRemoveModal = () => {
    this.setState({ open: true, modifyType: 'removeCoin' });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  updateState(userTransactions) {
    this.setState({
      transactions: userTransactions,
    });
  }

  editCoin = () => {
    alert('Edit');
  }

  render() {
    return (
      <div className="MyCoins">
        <AddCoinModal
          state={this.state.open}
          modifyType={this.state.modifyType}
          onCloseModal={this.onCloseModal}
          addCoin={(e, type) => { this.props.addCoin(e, type); }}
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
              <th className="MyCoins-table-header-th">Invested</th>
              <th className="MyCoins-table-header-th">Edit</th>
            </tr>
          </thead>
          <tbody className="MyCoins-table-body">
            {this.state.transactions.map(transaction => (<MyCoinRow
              transaction={transaction}
              editCoin={this.editCoin}
            />))}
          </tbody>
        </table>
      </div>
    );
  }
}

MyCoins.defaultProps = {
  userTransactions: [
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
  ],
};

export default MyCoins;

