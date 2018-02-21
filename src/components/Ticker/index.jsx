import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import TickerRow from '../TickerRow';
import './index.css';


class Ticker extends Component {
  constructor() {
    super();
    this.state = {
      prices: [],
    };
    axios.get('/prices').then((priceData) => {
      this.setState({
        prices: priceData.data,
      });
    });
  }
  componentDidMount() {
    setInterval(
      () => {
        axios.get('/prices').then((priceData) => {
          this.setState({
            prices: priceData.data,
          });
        });
      }
      , 5000,
    );
  }
  render() {
    return (
      <div className="Ticker">
        <table className="Ticker-table" cellSpacing="0" cellPadding="0">
          <thead>
            <tr>
              <th className="Ticker-table-header-th">Symbol</th>
              <th className="Ticker-table-header-th">Coin Name</th>
              <th className="Ticker-table-header-th">Price</th>
              <th className="Ticker-table-header-th">Volume</th>
              <th className="Ticker-table-header-th">Change</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.prices.map(price => (
                <TickerRow
                  price={price}
                  select={sym => this.props.select(sym)}
                  key={price.Symbol}
                />
              ))
            }
          </tbody>
        </table>
      </div>
    );
  }
}

Ticker.propTypes = {
  select: PropTypes.func.isRequired,
};

export default Ticker;
