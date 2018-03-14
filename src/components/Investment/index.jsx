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
          <p className="Investment-Header-Title">Investment</p>
        </div>
        <div className="Investment-Body">
          <div className="Investment-Values">
            <p className="Investment-Invested">
              Invested<br />
              <span className="Investment-Invested-span">$ {this.props.invested}</span>
            </p>
            <p className="Investment-Current">
              Current Value<br />
              <span className={this.props.currentValue < this.props.invested ? 'Investment-Current-span-loss' : 'Investment-Current-span-profit'}>$ {(this.props.currentValue).toFixed(4)}</span>
            </p>
          </div>
          <div className="Investment-Graph1">
            <div className="Investment-bar">
              <div
                className="Investment-progress"
                style={progressStyle}
              />
            </div>
          </div>
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
