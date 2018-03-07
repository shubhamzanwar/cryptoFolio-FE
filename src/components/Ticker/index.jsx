import React from 'react';
import PropTypes from 'prop-types';
import TickerRow from '../TickerRow';
import './index.css';


const Ticker = props => (
  <div className="Ticker">
    <table className="Ticker-table" cellSpacing="0" cellPadding="0">
      <thead>
        <tr>
          <th className="Ticker-table-header-th">Symbol</th>
          <th className="Ticker-table-header-th">Coin Name</th>
          <th className="Ticker-table-header-th">Price (USD)</th>
          <th className="Ticker-table-header-th">Volume</th>
          <th className="Ticker-table-header-th">Change (%)</th>
        </tr>
      </thead>
      <tbody>
        {
              props.prices.map(price => (
                <TickerRow
                  price={price}
                  select={sym => props.select(sym)}
                  row={props.row}
                  key={price.Symbol}
                />
              ))
            }
      </tbody>
    </table>
  </div>
);

Ticker.propTypes = {
  prices: PropTypes.arrayOf(),
  row: PropTypes.string,
};

Ticker.defaultProps = {
  prices: [],
  row: 'BTC',
};

export default Ticker;
