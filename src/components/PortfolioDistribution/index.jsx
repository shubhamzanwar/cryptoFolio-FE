import React, { Component } from 'react';
import './index.css';

class PortfolioDistribution extends Component {
  render() {
    return (
      <div className="Distribution">
        <div className="Distribution-Header">
          <p className="Distribution-Header-Title">My Coins</p>
        </div>
        <div className="Distribution-GraphContainer">
          <div className="Graph" />
          <div className="GraphLabel">
            <div className="GraphLabelItem">
              <span>42%<br />BCH</span>
              <span>42%<br />BCH</span><br />
              <span>42%<br />BCH</span><br />
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default PortfolioDistribution;
