import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.css';
import EditCoinModal from './../EditCoinModal';

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
        <EditCoinModal state={this.state.open} onCloseModal={this.onCloseModal} data={{ name: 'Bitcoin', quantity: 0.12, price: 3121 }} />
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
  editCoin: PropTypes.func.isRequired,
};

MyCoinRow.defaultProps = {
  transaction: {},
};

export default MyCoinRow;
