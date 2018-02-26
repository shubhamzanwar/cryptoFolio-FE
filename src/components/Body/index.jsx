import React, { Component } from 'react';
import axios from 'axios';
import { orderBy } from 'lodash';
import PriceRow from '../PriceRow';
import GraphContainer from '../GraphContainer';
import Ticker from '../Ticker';
import Orders from '../Orders';
import './index.css';

class Body extends Component {
  constructor() {
    super();
    this.state = {
      selectedCoin: 'BTC',
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

  setSelectedCoin(sym) {
    this.setState({
      selectedCoin: sym,
    });
  }

  render() {
    return (
      <div className="Body">
        <PriceRow prices={orderBy(this.state.prices, ['Price', 'Change'], ['desc', 'desc']).slice(0, 8)} />
        <div className="Body-graph-and-ticker-container">
          <GraphContainer coin={this.state.selectedCoin} />
          <Ticker
            select={sym => this.setSelectedCoin(sym)}
            prices={this.state.prices}
          />
        </div>
        <div className="Body-orders">
          <Orders
            coin={this.state.selectedCoin}
            keys="asks"
            title="Buy Orders"
          />
          <Orders
            coin={this.state.selectedCoin}
            keys="bids"
            title="Sell Orders"
          />
        </div>
      </div>
    );
  }
}


export default Body;
