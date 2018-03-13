import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.css';
import MyCoinRow from '../MyCoinRow';
import AddCoinModal from './../AddCoinModal';

class MyCoins extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      modifyType: null,
    };
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
            {this.props.userTransactions.map(transaction => (<MyCoinRow
              transaction={transaction}
              allTransactions={this.props.allTransactions[transaction.coinSymbol]}
              editCoin={this.editCoin}
            />))}
          </tbody>
        </table>
      </div>
    );
  }
}

MyCoins.propTypes = {
  userTransactions: PropTypes.arrayOf,
  allTransactions: PropTypes.arrayOf,
  addCoin: PropTypes.func,
};
MyCoins.defaultProps = {
  userTransactions: [],
  allTransactions: [],
  addCoin: null,
};

export default MyCoins;

