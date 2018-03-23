import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.css';


class TransfersTable extends Component {
  render() {
    let titleTitle = null;
    if (this.props.type === 'sent') {
      titleTitle = 'Coins transfered';
    } else if (this.props.type === 'received') {
      titleTitle = 'Coins received';
    } else if (this.props.type === 'requestToMe') {
      titleTitle = 'Requested to me';
    } else {
      titleTitle = 'Requested by me';
    }

    return (
      <div className="TransfersTable">
        <h3 className="TransfersTable-heading">
          {
                titleTitle
            }
        </h3>
        <table className="TransferBody-received" cellSpacing="0" cellPadding="0">
          <thead>
            <tr>
              <th className="TransferBody-table-header">{(this.props.type === 'sent' || this.props.type === 'requestedByMe') ? 'To' : 'From'}</th>
              <th className="TransferBody-table-header">Coin</th>
              <th className="TransferBody-table-header">Quantity</th>
              {(this.props.type === 'requestedByMe' || this.props.type === 'requestToMe') ? <th className="TransferBody-table-header">Response</th> : ''}
            </tr>
          </thead>
          <tbody>
            {
                this.props.transfers.map(transfer => (
                  <tr className="TransferBody-table-row">
                    <td className="TransferBody-table-row-td">{transfer.from.id === 1 ? 'Exchange' : (this.props.type === 'sent' || this.props.type === 'requestToMe') ? transfer.to.fullName : transfer.from.fullName}</td>
                    <td className="TransferBody-table-row-td">{transfer.coin.symbol}</td>
                    <td className="TransferBody-table-row-td">{transfer.quantity}</td>
                    {
                      (this.props.type === 'requestedByMe' || this.props.type === 'requestToMe')
                    ? (transfer.status === 2)
                      ? <td className="TransferBody-table-row-td">Rejected</td>
                      : <td className="TransferBody-table-row-td"><input type="submit" value="Approve" onClick={() => { this.props.requestOTP(transfer.from.id, transfer.id); }} /><input type="submit" value="Decline" onClick={() => { this.props.decline(transfer.from, transfer.id); }} /></td>
                    : ''
                    }
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
  decline: PropTypes.func.isRequired,
  toggleOTP: PropTypes.func.isRequired,
  requestOTP: PropTypes.func.isRequired,
};

TransfersTable.defaultProps = {
  transfers: [],
  type: '',
};

export default TransfersTable;
