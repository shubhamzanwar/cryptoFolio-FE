import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.css';
import EditCoinModal from './../EditCoinModal';

class MyTransactionRow extends Component {
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
      <tr className="MyTransactionCoin-table-row">
        <EditCoinModal
          state={this.state.open}
          onCloseModal={this.onCloseModal}
          data={{
            transactionId: this.props.transaction.transactionId,
            quantity: this.props.transaction.quantity,
            price: this.props.transaction.price,
            }}
        />
        <td className="MyTransactionCoin-table-row-td">{this.props.index}</td>
        <td className="MyTransactionCoin-table-row-td">{this.props.transaction.quantity}</td>
        <td className="MyTransactionCoin-table-row-td">{this.props.transaction.price}</td>
        <td
          className="MyTransactionCoin-table-row-td-EditCoin"
          onClick={() => { this.onOpenModal(); }}
        >
          <i className="far fa-edit" />
        </td>
      </tr>
    );
  }
}

MyTransactionRow.propTypes = {
  index: PropTypes.number.isRequired,
  transaction: PropTypes.shape({
    transactionId: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
  }),
};

MyTransactionRow.defaultProps = {
  transaction: {},
};

export default MyTransactionRow;
