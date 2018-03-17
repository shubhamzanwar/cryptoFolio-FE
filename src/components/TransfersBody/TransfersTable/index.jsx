import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.css';


class TransfersTable extends Component {
  render() {
    return (
      <div className="TransfersTable">
        <h3 className="TransfersTable-heading">
          {
                this.props.type === 'sent' ? 'Coins transfered' : 'Coins received'
            }
        </h3>
        <table className="TransferBody-received" cellSpacing="0" cellPadding="0">
          <thead>
            <tr>
              <th className="TransferBody-table-header">{this.props.type === 'sent' ? 'To' : 'From'}</th>
              <th className="TransferBody-table-header">Coin</th>
              <th className="TransferBody-table-header">Quantity</th>
            </tr>
          </thead>
          <tbody>
            {
                this.props.transfers.map(transfer => (
                  <tr className="TransferBody-table-row">
                    <td className="TransferBody-table-row-td">{transfer.from.id === 1 ? 'Market' : this.props.type === 'sent' ? transfer.to.fullName : transfer.from.fullName}</td>
                    <td className="TransferBody-table-row-td">{transfer.coin.symbol}</td>
                    <td className="TransferBody-table-row-td">{transfer.quantity}</td>
                  </tr>
                        ))
              }
          </tbody>
        </table>
      </div>
    );
  }
}


TransfersTable.propTypes = {
  transfers: PropTypes.arrayOf(PropTypes.shape({
    from: PropTypes.shape({
      fullName: PropTypes.string.isRequired,
    }),
    coin: PropTypes.shape({
      symbol: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
    quantity: PropTypes.number.isRequired,
  })),
  type: PropTypes.string,
};

TransfersTable.defaultProps = {
  transfers: [],
  type: '',
};

export default TransfersTable;
