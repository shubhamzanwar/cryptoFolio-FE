import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.css';
import EditCoinModal from './../EditCoinModal';

class MyTransactionRow extends Component {
  state = {
    open: false,
    price: this.props.transaction.price,
    quantity: this.props.transaction.quantity,
  };

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };
  onEditQuantity=(e) => {
    this.setState({
      quantity: e.target.value,
    });
  }
  onEditPrice=(e) => {
    this.setState({
      price: e.target.value,
    });
  }

render = () => (
  <tr className="MyTransactionCoin-table-row">
    <EditCoinModal
      state={this.state.open}
      onCloseModal={this.onCloseModal}
      data={{
            transactionId: this.props.transaction.id,
            quantity: this.state.quantity,
            price: this.state.price,
            coin: this.props.coinName,
            }}
      onEditQuantity={e => this.onEditQuantity(e)}
      onEditPrice={e => this.onEditPrice(e)}
      onClickUpdate={data => this.props.onClickUpdate(data)}
    />
    <td className="MyTransactionCoin-table-row-td">{this.props.index}</td>
    <td className="MyTransactionCoin-table-row-td">{this.state.price}</td>
    <td className="MyTransactionCoin-table-row-td">{this.state.quantity}</td>
    <td
      className="MyTransactionCoin-table-row-td-EditCoin"
      onClick={() => { this.onOpenModal(); }}
    >
      <i className="far fa-edit" />
    </td>
  </tr>
);
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
