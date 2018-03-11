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
        <td className="MyCoin-table-row-td-Symbol">{this.props.transaction.Symbol}</td>
        <td className="MyCoin-table-row-td-Name">{this.props.transaction.Name}</td>
        <td className="MyCoin-table-row-td">{this.props.transaction.PurchasedPrice}</td>
        <td className="MyCoin-table-row-td">{this.props.transaction.CurrentPrice}</td>
        <td className="MyCoin-table-row-td">{this.props.transaction.Volume}</td>
        <td className="MyCoin-table-row-td">{this.props.transaction.Total}</td>
        <td className={this.props.transaction.Change > 0 ? 'MyCoin-table-row-td MyCoin-table-row-td-profit' : 'MyCoin-table-row-td MyCoin-table-row-td-loss'}>
          {this.props.transaction.Change}
          <i className={this.props.transaction.Change > 0 ? 'fas fa-arrow-circle-up' : 'fas fa-arrow-circle-down'} />
        </td>
        <td
          className="MyCoin-table-row-td-EditCoin"
          onClick={() => { this.onOpenModal(); }}
        />
      </tr>
    );
  }
}

MyCoinRow.propTypes = {
  transaction: PropTypes.shape({
    Symbol: PropTypes.string.isRequired,
    Name: PropTypes.string.isRequired,
    PurchasedPrice: PropTypes.number.isRequired,
    CurrentPrice: PropTypes.number.isRequired,
    Volume: PropTypes.number.isRequired,
    Total: PropTypes.number.isRequired,
    Change: PropTypes.number.isRequired,
  }),
  editCoin: PropTypes.func.isRequired,
};

MyCoinRow.defaultProps = {
  transaction: {},
};

export default MyCoinRow;
