import React, { Component } from 'react';
import Modal from 'react-responsive-modal';
import PropTypes from 'prop-types';
import MyTransactionRow from '../MyTransactionRow';
import './index.css';

const demoValue = [
  {
    transactionId: 1,
    quantity: 2,
    price: 3,
  },
  {
    transactionId: 4,
    quantity: 5,
    price: 6,
  },
];

class EditCoinListModal extends Component {
  render() {
    return (
      <Modal
        open={this.props.state}
        onClose={this.props.onCloseModal}
        little
        styles={{
          modal: {
            backgroundColor: 'rgb(255, 255, 255)',
            borderRadius: '10px',
          },
        }}
      >
        <h2 className="editCoinListModal_header">{this.props.coinName}</h2>
        <table className="MyTransactionCoins-table" cellSpacing="0" cellPadding="0">
          <thead className="MyTransactionCoins-table-header">
            <tr>
              <th className="MyTransactionCoins-table-header-th" />
              <th className="MyTransactionCoins-table-header-th">Purchased Price</th>
              <th className="MyTransactionCoins-table-header-th">Quantity</th>
              <th className="MyTransactionCoins-table-header-th">Edit</th>
            </tr>
          </thead>
          <tbody className="MyCoins-table-body">
            {demoValue.map((transaction, index) => (<MyTransactionRow
              transaction={transaction}
              index={index + 1}
            />))}
          </tbody>
        </table>
      </Modal>
    );
  }
}

EditCoinListModal.propTypes = {
  onCloseModal: PropTypes.func.isRequired,
  state: PropTypes.string.isRequired,
  coinName: PropTypes.string.isRequired,
};

export default EditCoinListModal;
