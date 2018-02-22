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
    };
    axios.get(`/liveGraph?coin=${this.props.coin}`).then((priceData) => {
      this.setState({
        prices: priceData.data.prices,
        volume: priceData.data.volume,
      });
    });
  }
  componentDidMount() {
    setInterval(
      () => {
        axios.get(`/liveGraph?coin=${this.props.coin}`).then((priceData) => {
          this.setState({
            prices: priceData.data.prices,
            volume: priceData.data.volume,
          });
        });
      }
      , 5000,
    );
  }
  render() {
    return (
      <div className="GraphContainer">
        <div className="GraphContainer-header">
          <h3>{this.props.coin} / USD <i className="fa fa-caret-down" aria-hidden="true" /></h3>

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
