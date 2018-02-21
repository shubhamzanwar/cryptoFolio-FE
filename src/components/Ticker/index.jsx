import React, { Component } from 'react';
import axios from 'axios';
import './index.css';


class Ticker extends Component {
  constructor() {
    super();
    this.state = {
      prices: [],
    };
  }
  componentDidMount() {
    axios.get('/prices').then((priceData) => {
      this.setState({
        prices: priceData.data,
      });
    });
  }
  render() {
    return (
      <div className="Ticker">
        <table className="Ticker-table" cellSpacing="0" cellPadding="0">
          <thead>
            <th className="Ticker-table-header-th">Symbol</th>
            <th className="Ticker-table-header-th">Coin Name</th>
            <th className="Ticker-table-header-th">Price</th>
            <th className="Ticker-table-header-th">Volume</th>
            <th className="Ticker-table-header-th">Change</th>
          </thead>
          {
            this.state.prices.map(price => (
              <tr className="Ticker-table-row">
                <td className="Ticker-table-row-td">{price.Symbol}</td>
                <td className="Ticker-table-row-td">Bitcoin</td>
                <td className="Ticker-table-row-td">{price.Price}</td>
                <td className="Ticker-table-row-td">{price.Volume.toFixed(3)}</td>
                <td className={price.Change > 0 ? 'Ticker-table-row-td success' : 'Ticker-table-row-td danger'}>{price.Change.toFixed(3)}</td>
              </tr>
              ))
          }
        </table>
      </div>
    );
  }
}

export default Ticker;
