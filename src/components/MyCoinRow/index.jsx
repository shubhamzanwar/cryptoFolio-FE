import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.css';

class MyCoinRow extends Component {
  render() {
    return (
      <tr className="MyCoin-table-row">
        <td className="MyCoin-table-row-td-Symbol">{this.props.transaction.coinSymbol}</td>
        <td className="MyCoin-table-row-td-Name">{this.props.transaction.coinName}</td>
        <td className="MyCoin-table-row-td">{this.props.transaction.quantity}</td>
        <td className="MyCoin-table-row-td">$ {this.props.transaction.invested}</td>
        {/* <td className="MyCoin-table-row-td">$100</td> */}
        <td className="MyCoin-table-row-td">${(this.props.currentValue * this.props.transaction.quantity).toFixed(4)}</td>
        <td
          className="MyCoin-table-row-td-EditCoin"
          onClick={() => { this.props.editCoin(this.props.transaction.coinSymbol); }}
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
  currentValue: PropTypes.number.isRequired,
};

MyCoinRow.defaultProps = {
  transaction: {},
};

export default MyCoinRow;
