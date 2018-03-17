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
      first: true,
    };
  }
  // componentDidMount() {
  //   this.getdata(this.props.coin);
  // }
  shouldComponentUpdate(nextProps, nextState) {
    console.log(nextProps.coin, this.props.coin);
    if (nextProps.coin !== this.props.coin || this.state.first || this.state.lastHigh !== nextState.lastHigh) {
      console.log('update');
      this.setState({
        first: false,
      });
      return true;
    }
    console.log('no update');
    return false;
  }
  componentWillUpdate(nextProps) {
    console.log('updating');
    this.getdata(nextProps.coin);
  }
  getdata(coin) {
    axios.get(`/historicalData?coin=${coin}`).then((priceData) => {
      this.setState({
        prices: priceData.data.price,
        volume: priceData.data.volume,
        lastLow: priceData.data.price[2000][3],
        lastOpen: priceData.data.price[2000][1],
        lastHigh: priceData.data.price[2000][2],
        lastClose: priceData.data.price[2000][4],
      });
    });
  }
  render() {
    return (
      <div className="GraphContainer">
        <div className="GraphContainer-header">
          <div className="GraphContainer-info">
            <h3>{this.props.coin} / USD</h3>
            <p>Last Minute
              <span> Open: {this.state.lastOpen} </span>
              <span>High: {this.state.lastHigh} </span>
              <span>Low: {this.state.lastLow} </span>
              <span>Close: {this.state.lastClose} </span>
            </p>
          </div>
          <div className="Chart-Tabs-Button">
            <button className={this.props.displayType === 'current' ? 'selected' : ''} onClick={() => this.props.changeDisplayType('current')} >Current</button>
            <button className={this.props.displayType === 'historical' ? 'selected' : ''} onClick={() => this.props.changeDisplayType('historical')}>Historical</button>
          </div>
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
  displayType: PropTypes.string.isRequired,
  changeDisplayType: PropTypes.func.isRequired,
};

GraphHistoricalContainer.defaultProps = {
  coin: '',
};

export default GraphHistoricalContainer;
