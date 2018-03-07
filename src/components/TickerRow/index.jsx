import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const TickerRow = props => (
  <tr className={props.row === props.price.Symbol ? 'Ticker-table-row selected-row' : 'Ticker-table-row'} onClick={() => props.select(props.price.Symbol)}>
    <td className="Ticker-table-row-td">{props.price.Symbol}</td>
    <td className="Ticker-table-row-td">{props.price.Name}</td>
    <td className="Ticker-table-row-td">{props.price.Price}</td>
    <td className="Ticker-table-row-td">{props.price.Volume.toFixed(3)}</td>
    <td className={props.price.Change > 0 ? 'Ticker-table-row-td success' : 'Ticker-table-row-td danger'}>{props.price.Change.toFixed(3)} <i className={props.price.Change > 0 ? 'fa fa-long-arrow-up' : 'fa fa-long-arrow-down'} /></td>
  </tr>
);

TickerRow.propTypes = {
  price: PropTypes.shape({
    Symbol: PropTypes.string.isRequired,
    Name: PropTypes.string.isRequired,
    Price: PropTypes.number.isRequired,
    Volume: PropTypes.number.isRequired,
    Change: PropTypes.number.isRequired,
  }),
  select: PropTypes.func.isRequired,
  row: PropTypes.string,
};

TickerRow.defaultProps = {
  price: {},
  row: 'BTC',
};

export default TickerRow;
