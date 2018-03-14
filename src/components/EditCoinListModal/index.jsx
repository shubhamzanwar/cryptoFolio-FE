import React, { Component } from 'react';
import Modal from 'react-responsive-modal';
import PropTypes from 'prop-types';
import MyTransactionRow from '../MyTransactionRow';
import './index.css';

class EditCoinListModal extends Component {
  render() {
    return (
      <Modal
        open={this.props.state}
        onClose={this.props.onCloseModal}
        little
        styles={{
          modal: {
            backgroundColor: 'rgb(33,49,71)',
            borderRadius: '10px',
          },
        }}
      >
        <h2 className="editCoinListModal_header">{this.props.coinName}</h2>
        <table className="MyTransactionCoins-table" cellSpacing="0" cellPadding="0">
          <thead className="MyTransactionCoins-table-header">
            <tr>
              <th className="MyTransactionCoins-table-header-th">Sl No</th>
              <th className="MyTransactionCoins-table-header-th">Purchased Price</th>
              <th className="MyTransactionCoins-table-header-th">Quantity</th>
              <th className="MyTransactionCoins-table-header-th">Edit</th>
            </tr>
          </thead>
          <tbody className="MyCoins-table-body">
            {this.props.transactions.map((transaction, index) => (<MyTransactionRow
              transaction={transaction}
              index={index + 1}
              onClickUpdate={data => this.props.onClickUpdate(data)}
              coinName={this.props.coinName}
            />))}
          </tbody>
        </table>
      </Modal>
    );
  }
}

EditCoinListModal.propTypes = {
  transactions: PropTypes.arrayOf(),
  onCloseModal: PropTypes.func.isRequired,
  state: PropTypes.string.isRequired,
  coinName: PropTypes.string.isRequired,
  onClickUpdate: PropTypes.func.isRequired,
};
EditCoinListModal.defaultProps = {
  transactions: [],
};
export default EditCoinListModal;
