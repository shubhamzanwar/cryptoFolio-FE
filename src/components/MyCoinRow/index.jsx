import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const MyCoinRow = props => (
  <tr className="MyCoin-table-row">
    <td className="MyCoin-table-row-td-Symbol">{props.transaction.Symbol}</td>
    <td className="MyCoin-table-row-td-Name">{props.transaction.Name}</td>
    <td className="MyCoin-table-row-td">{props.transaction.PurchasedPrice}</td>
    <td className="MyCoin-table-row-td">{props.transaction.CurrentPrice}</td>
    <td className="MyCoin-table-row-td">{props.transaction.Volume}</td>
    <td className="MyCoin-table-row-td">{props.transaction.Total}</td>
    <td className={props.transaction.Change > 0 ? 'MyCoin-table-row-td MyCoin-table-row-td-profit' : 'MyCoin-table-row-td MyCoin-table-row-td-loss'}>
      {props.transaction.Change}
      <i className={props.transaction.Change > 0 ? 'fas fa-arrow-circle-up' : 'fas fa-arrow-circle-down'} />
    </td>
    <td
      className="MyCoin-table-row-td-EditCoin"
      onClick={() => { props.editCoin(); }}
    />
  </tr>
);

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
