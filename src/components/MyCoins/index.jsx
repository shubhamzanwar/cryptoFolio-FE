import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.css';
import MyCoinRow from '../MyCoinRow';


class MyCoins extends Component {
  constructor(props) {
    super(props);
    this.state = {
      transactions: [],
    };
  }

  componentWillReceiveProps(nextProps) {
    this.updateState(nextProps.userTransactions);
  }


  updateState(userTransactions) {
    this.setState({
      transactions: userTransactions,
    });
  }

  render() {
    return (
      <div className="MyCoins">
        <div className="MyCoins-Header">
          <p className="MyCoins-Header-Title">My Coins</p>
          <span className="MyCoins-Header-ModifyButton" onClick={() => this.props.addCoin()} role="presentation"><i className="fas fa-plus" />&nbsp;&nbsp;Add Coin</span>&nbsp;&nbsp;&nbsp;
          <span className="MyCoins-Header-ModifyButton" onClick={() => this.props.removeCoin()} role="presentation"><i className="fas fa-trash" />&nbsp;&nbsp;Remove Coin</span>
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
              editCoin={coin => this.props.editCoin(coin)}
            />))}
          </tbody>
        </table>
      </div>
    );
  }
}

MyCoins.propTypes = {
  userTransactions: PropTypes.arrayOf(),
  editCoin: PropTypes.func.isRequired,
  addCoin: PropTypes.func.isRequired,
  removeCoin: PropTypes.func.isRequired,
};

MyCoins.defaultProps = {
  userTransactions: [],
};

export default MyCoins;

