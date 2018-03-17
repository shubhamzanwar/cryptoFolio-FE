import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.css';

const ReactHighcharts = require('react-highcharts');

class PortfolioDistributionChart extends Component {
  loadChart() {
    const config = {
      chart: {
        type: 'pie',
        b: this,
        backgroundColor: '#213147',
        zoomType: false,
        height: 400,
      },
      title: {
        text: '',
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>',
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: false,
          },
          borderWidth: 0,
        },
      },
      series: [{
        name: 'Coins',
        data: this.props.portfolioData,
      }],
    };

    return <ReactHighcharts config={config} />;
  }
  render() {
    return this.loadChart();
  }
}

PortfolioDistributionChart.propTypes = {
  portfolioData: PropTypes.arrayOf(),
};

PortfolioDistributionChart.defaultProps = {
  portfolioData: [],
};

export default PortfolioDistributionChart;
