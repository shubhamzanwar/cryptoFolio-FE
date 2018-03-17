import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Indicators from 'highcharts/indicators/indicators';
import './index.css';

const ReactHighstock = require('react-highcharts/ReactHighstock.src');

Indicators(ReactHighstock.Highcharts);

class Graph extends Component {
  loadChart() {
    const config = {
      rangeSelector: {
        enabled: true,
        buttons: [
          {
            type: 'day',
            count: 1,
            text: '1d',
          }, {
            type: 'day',
            count: 7,
            text: '1w',
          }, {
            type: 'month',
            count: 1,
            text: '1m',
          }, {
            type: 'ytd',
            text: 'YTD',
          }, {
            type: 'all',
            text: 'All',
          }],
        buttonTheme: {
          fill: 'grey',
          stroke: 'none',
          'stroke-width': 0,
          r: 5,
          style: {
            color: '#000',
            // fontWeight: 'bold',
          },
          states: {
            hover: {
              fill: 'rgb(0, 164, 236)',
              style: {
                color: 'white',
              },
            },
            select: {
              fill: 'rgb(0, 164, 236)',
              style: {
                color: 'white',
              },
            },
            // disabled: { ... }
          },
        },
        inputStyle: {
          display: 'none',
        },
        labelStyle: {
          display: 'none',
          verticalAlign: 'bottom',
        },
        inputPosition: {
          align: 'center',
        },
      },
      plotOptions: {
        candlestick: {
          color: 'rgb(55, 222, 231)',
          upColor: '#fff',
        },
        series: {
          animation: {
            duration: 2000,
          },
          animationLimit: 0,
        },
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
        id: 'priceChart',
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
      }, {
        type: 'sma',
        linkedTo: 'priceChart',
      }],
      navigator: {
        enabled: true,
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
