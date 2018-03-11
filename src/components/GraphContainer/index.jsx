import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Graph from '../Graph';
import './index.css';

class GraphContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      prices: [],
      volume: [],
      lastLow: 0,
      lastHigh: 0,
      lastClose: 0,
      lastOpen: 0,
    };
    this.getdata(this.props.coin);
    this.interval = null;
  }
  componentWillUpdate(nextProps) {
    if (nextProps.coin !== this.props.coin) {
      this.getdata(nextProps.coin);
      clearInterval(this.interval);
      this.interval = setInterval(() => this.getdata(nextProps.coin), 5000);
    }
  }
  getdata(coin) {
    axios.get(`/liveGraph?coin=${coin}`).then((priceData) => {
      this.setState({
        prices: priceData.data.prices,
        volume: priceData.data.volume,
        lastLow: priceData.data.prices[1439][3],
        lastOpen: priceData.data.prices[1439][1],
        lastHigh: priceData.data.prices[1439][2],
        lastClose: priceData.data.prices[1439][4],
      });
    });
  }
  render() {
    return (
      <div className="GraphContainer">
        <div className="GraphContainer-header">
          <h3>{this.props.coin} / USD</h3>
          <p>Last Minute
            <span> Open: {this.state.lastOpen} </span>
            <span>High: {this.state.lastHigh} </span>
            <span>Low: {this.state.lastLow} </span>
            <span>Close: {this.state.lastClose} </span>
          </p>
        </div>
        <Graph
          prices={this.state.prices}
          volume={this.state.volume}
          coin={this.props.coin}
        />
      </div>
    );
  }
}


GraphContainer.propTypes = {
  coin: PropTypes.string,
};

GraphContainer.defaultProps = {
  coin: 'BTC',
};

export default GraphContainer;
