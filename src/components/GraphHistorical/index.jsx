import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.css';

const ReactHighstock = require('react-highcharts/ReactHighstock.src');

class Graph extends Component {
  loadChart() {
    const config = {
      rangeSelector: {
        enabled: true,
      },
      plotOptions: {
        candlestick: {
          color: 'rgb(55, 222, 231)',
          upColor: '#fff',
        },
        // series: {
        //   animation: {
        //     duration: 2000,
        //   },
        //   animationLimit: 0,
        // },
      },
      chart: {
        backgroundColor: '#213147',
        zoomType: true,
        height: 500,
      },
      yAxis: [{
        labels: {
          align: 'left',
        },
        opposite: false,
        title: {
          text: 'CandleSticks',
        },
        gridLineDashStyle: 'longdash',
        gridLineColor: 'rgba(242, 127, 0, 0.4)',
        height: '70%',
        lineWidth: 0,
        lineColor: '#FFF',
        resize: {
          enabled: true,
        },
      }, {
        labels: {
          align: 'left',
        },
        opposite: false,
        gridLineDashStyle: 'longdash',
        gridLineColor: 'rgba(242, 127, 0, 0.4)',
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
        animation: {
          duration: 2000,
        },
        animationLimit: 0,
      }, {
        type: 'column',
        name: `${this.props.coin} Volume`,
        color: 'rgb(0, 173, 239)',
        data: this.props.volume,
        dataGrouping: {
          enabled: true,
        },
        yAxis: 1,
      }],
      navigator: {
        enabled: true,
      },
      scrollbar: {
        enabled: true,
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
