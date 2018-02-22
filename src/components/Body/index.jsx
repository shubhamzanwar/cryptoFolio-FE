import React, { Component } from 'react';
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
    };
  }

  setSelectedCoin(sym) {
    this.setState({
      selectedCoin: sym,
    });
  }

  render() {
    return (
      <div className="Body">
        <PriceRow />
        <div className="Body-graph-and-ticker-container">
          <GraphContainer coin={this.state.selectedCoin} />
          <Ticker select={sym => this.setSelectedCoin(sym)} />
        </div>
        <div className="Body-orders">
          <Orders keys="asks" /><Orders keys="bids" />
        </div>
      </div>
    );
  }
}


export default Body;
