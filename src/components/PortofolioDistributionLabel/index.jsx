import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './index.css';

class PortfolioDistributionLabel extends Component {
  render() {
    return (
      <div className="GraphLabelItem">
        <span className="GraphLabelItem-Value" style={{ color: this.props.color }}>{this.props.value}</span>
        <span className="GraphLabelItem-Symbol" style={{ color: this.props.color }}>{this.props.symbol}</span>
      </div>
    );
  }
}

PortfolioDistributionLabel.propTypes = {
  value: PropTypes.number.isRequired,
  symbol: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
};

export default PortfolioDistributionLabel;
