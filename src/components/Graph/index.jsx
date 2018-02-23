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
        height: 500,
      },
      yAxis: [{
        labels: {
          align: 'left',
          x: -3,
        },
        title: {
          text: 'CandleSticks',
        },
        gridLineDashStyle: 'longdash',
        gridLineColor: '#3e8869',
        height: '70%',
        lineWidth: 0,
        lineColor: '#FFF',
        resize: {
          enabled: true,
        },
      }, {
        labels: {
          align: 'left',
          x: -3,
        },
        gridLineDashStyle: 'longdash',
        gridLineColor: '#3e8869',
        title: {
          text: 'Volume',
        },
        top: '70%',
        height: '30%',
        lineWidth: 0,
        lineColor: '#FFF',
        offset: 0,
      }],
      tooltip: {
        split: true,
      },

      series: [{
        type: 'candlestick',
        name: `${this.props.coin} / USD`,
        data: this.props.prices,
        dataGrouping: {
          enabled: true,
        },
      }, {
        type: 'column',
        name: `${this.props.coin} Volume`,
        color: '#F00',
        data: this.props.volume,
        dataGrouping: {
          enabled: true,
        },
        yAxis: 1,
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
  volume: PropTypes.arrayOf(),
  coin: PropTypes.string,
};

Graph.defaultProps = {
  prices: [],
  volume: [],
  coin: 'BTC',
};

export default Graph;
