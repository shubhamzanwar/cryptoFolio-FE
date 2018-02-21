import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const TickerRow = props => (
  <tr className="Ticker-table-row" onClick={() => props.select(props.price.Symbol)}>
    <td className="Ticker-table-row-td">{props.price.Symbol}</td>
    <td className="Ticker-table-row-td">Bitcoin</td>
    <td className="Ticker-table-row-td">{props.price.Price}</td>
    <td className="Ticker-table-row-td">{props.price.Volume.toFixed(3)}</td>
    <td className={props.price.Change > 0 ? 'Ticker-table-row-td success' : 'Ticker-table-row-td danger'}>{props.price.Change.toFixed(3)}</td>
  </tr>
);

TickerRow.propTypes = {
  price: PropTypes.shape({
    Symbol: PropTypes.string.isRequired,
    Price: PropTypes.number.isRequired,
    Volume: PropTypes.number.isRequired,
    Change: PropTypes.number.isRequired,
  }),
  select: PropTypes.func.isRequired,
};

TickerRow.defaultProps = {
  price: {},
};

export default TickerRow;
