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
          coinName="BTC"
        />
        <td className="MyCoin-table-row-td-Symbol">{this.props.transaction.Symbol}</td>
        <td className="MyCoin-table-row-td-Name">{this.props.transaction.Name}</td>
        <td className="MyCoin-table-row-td">{this.props.transaction.Quantity}</td>
        <td className="MyCoin-table-row-td">{this.props.transaction.CurrentPrice}</td>
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
    Symbol: PropTypes.string.isRequired,
    Name: PropTypes.string.isRequired,
    PurchasedPrice: PropTypes.number.isRequired,
    Quantity: PropTypes.number.isRequired,
    CurrentPrice: PropTypes.number.isRequired,
    Volume: PropTypes.number.isRequired,
    Total: PropTypes.number.isRequired,
    Change: PropTypes.number.isRequired,
  }),
};

MyCoinRow.defaultProps = {
  transaction: {},
};

export default MyCoinRow;
