import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.css';

const ReactHighstock = require('react-highcharts/ReactHighstock.src');

class Graph extends Component {
  loadChart() {
    const config = {
      rangeSelector: {
        enabled: false,
      },
      chart: {
        backgroundColor: '#213147',
        zoomType: false,
      },
      yAxis: [{
        gridLineWidth: 0,
        minorGridLineWidth: 0,
      }],
      series: [{
        name: `${this.props.coin} / USD`,
        type: 'candlestick',
        data: this.props.prices,
        turboThreshold: 0,
      }],
      navigator: {
        enabled: false,
      },
      scrollbar: {
        enabled: false,
      },
    };

    return <ReactHighstock config={config} />;
  }
  render() {
    return this.loadChart();
  }
}

Graph.propTypes = {
  prices: PropTypes.arrayOf(),
  coin: PropTypes.string,
};

Graph.defaultProps = {
  prices: [],
  coin: 'BTC',
};

export default Graph;
