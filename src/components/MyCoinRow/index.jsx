import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.css';
import EditCoinListModal from './../EditCoinListModal';

class MyCoinRow extends Component {
  state = {
    open: false,
  };

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <tr className="MyCoin-table-row">
        <EditCoinListModal
          state={this.state.open}
          onCloseModal={this.onCloseModal}
          transaction={this.props.allTransactions}
          coinName="BTC"
        />
        <td className="MyCoin-table-row-td-Symbol">{this.props.transaction.coinSymbol}</td>
        <td className="MyCoin-table-row-td-Name">{this.props.transaction.coinName}</td>
        <td className="MyCoin-table-row-td">{this.props.transaction.quantity}</td>
        <td className="MyCoin-table-row-td">$ {this.props.transaction.invested}</td>
        <td
          className="MyCoin-table-row-td-EditCoin"
          onClick={() => { this.onOpenModal(); }}
        >
          <i className="far fa-edit" />
        </td>
      </tr>
    );
  }
}

MyCoinRow.propTypes = {
  transaction: PropTypes.shape({
    coinSymbol: PropTypes.string.isRequired,
    coinName: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    invested: PropTypes.number.isRequired,
  }),
};

MyCoinRow.defaultProps = {
  transaction: {},
};

export default MyCoinRow;
