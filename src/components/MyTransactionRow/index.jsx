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
    if (this.state.price > 0 && this.state.quantity > 0) {
      this.setState({ open: false });
    }
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
  onClickUpdate =(data) => {
    this.props.onClickUpdate(data);
    this.onCloseModal();
  }
  onClickDelete=(data) => {
    this.props.onClickDelete(data);
    this.onCloseModal();
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
      onClickUpdate={data => this.onClickUpdate(data)}
      onClickDelete={data => this.onClickDelete(data)}
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
    id: PropTypes.number.isRequired,
  }),
  onClickDelete: PropTypes.func.isRequired,
  coinName: PropTypes.string.isRequired,
  onClickUpdate: PropTypes.func.isRequired,
};

MyTransactionRow.defaultProps = {
  transaction: {},
};

export default MyTransactionRow;
