import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.css';

class Investment extends Component {
  render() {
    const progressStyle = {
      width: `${(this.props.currentValue / (this.props.invested + this.props.currentValue)) * 100}%`,
      marginLeft: `${(this.props.invested / (this.props.invested + this.props.currentValue)) * 100}%`,
    };

    if (this.props.currentValue < this.props.invested) {
      progressStyle.backgroundColor = 'red';
    } else {
      progressStyle.backgroundColor = '#03d603';
    }

    return (
      <div className="Investment">
        <div className="Investment-Header">
          <p className="Investment-Header-Title">Current Value</p>
        </div>
        <div className="Investment-Body">
          {isNaN(this.props.currentValue) ? <div className="Investment-table-row-loader" /> : `$ ${(this.props.currentValue).toFixed(4)}` }
        </div>
      </div>
    );
  }
}

Investment.propTypes = {
  invested: PropTypes.number,
  currentValue: PropTypes.number,
};

Investment.defaultProps = {
  invested: 10,
  currentValue: 12,
};


export default Investment;
