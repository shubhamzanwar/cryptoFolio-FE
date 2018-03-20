import React, { Component } from 'react';
import axios from 'axios';
import { orderBy } from 'lodash';
import PriceRow from '../PriceRow';
import GraphContainer from '../GraphContainer';
import GraphHistoricalContainer from '../GraphHistoricalContainer';
import Ticker from '../Ticker';
import Orders from '../Orders';
import TwitterBox from '../twitterBox';
import './index.css';

class Body extends Component {
  constructor() {
    super();
    this.state = {
      selectedCoin: 'BTC',
      prices: [],
      displayType: 'current',
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

  changeDisplayType(type) {
    this.setState({
      displayType: type,
    });
  }

  render() {
    return (
      <div className="Body">
        <PriceRow prices={orderBy(this.state.prices, ['Price', 'Change'], ['desc', 'desc']).slice(0, 8)} />
        <div className="Body-graph-and-ticker-container">
          {this.state.displayType === 'current' ? <GraphContainer displayType={this.state.displayType} changeDisplayType={type => this.changeDisplayType(type)} coin={this.state.selectedCoin} /> : <GraphHistoricalContainer displayType={this.state.displayType} changeDisplayType={type => this.changeDisplayType(type)} coin={this.state.selectedCoin} />}
          <Ticker
            select={sym => this.setSelectedCoin(sym)}
            row={this.state.selectedCoin}
            prices={this.state.prices}
          />
        </div>
        <div className="Body-orders-and-twitter-container">
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
          <TwitterBox
            coin={this.state.selectedCoin}
          />
        </div>
      </div>
    );
  }
}


export default Body;
