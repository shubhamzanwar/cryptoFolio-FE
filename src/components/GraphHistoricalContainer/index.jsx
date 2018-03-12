import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import GraphHistorical from '../GraphHistorical';
import './index.css';

class GraphHistoricalContainer extends Component {
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
  }
  componentDidMount() {
    console.log('componsnet mounted');
  }
  componentWillUpdate(nextProps) {
    if (nextProps.coin !== this.props.coin) {
      console.log('inside component Update');
      this.getdata(this.props.coin);
    }
  }
  getdata(coin) {
    axios.get(`/historicalData?coin=${coin}`).then((priceData) => {
      console.log(priceData);
      this.setState({
        prices: priceData.data.price,
        volume: priceData.data.volume,
        lastLow: priceData.data.price[1439][3],
        lastOpen: priceData.data.price[1439][1],
        lastHigh: priceData.data.price[1439][2],
        lastClose: priceData.data.price[1439][4],
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
        <GraphHistorical
          prices={this.state.prices}
          volume={this.state.volume}
          coin={this.props.coin}
        />
      </div>
    );
  }
}


GraphHistoricalContainer.propTypes = {
  coin: PropTypes.string,
};

GraphHistoricalContainer.defaultProps = {
  coin: 'BTC',
};

export default GraphHistoricalContainer;
