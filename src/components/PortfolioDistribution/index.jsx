import React, { Component } from 'react';

import PortfolioDistributionChart from '../PortifolioDistributionChart';
import './index.css';

const tempData = [{
  name: 'XRP',
  y: 56.33,
  color: 'rgb(232, 74, 161)',
}, {
  name: 'BTC',
  y: 96.33,
  color: 'rgb(239, 179, 59)',
}, {
  name: 'Firefox',
  y: 39.38,
  color: '#50ef3b',
}, {
  name: 'Safari',
  y: 4.77,
}, {
  name: 'Opera',
  y: 0.91,
}, {
  name: 'Proprietary or Undetectable',
  y: 0.2,
}];

class PortfolioDistribution extends Component {
  render() {
    return (
      <div className="Distribution">
        <div className="Distribution-Header">
          <p className="Distribution-Header-Title">My Coins</p>
          <div className="Distribution-Tabs-Button">
            <button className="selected">Investment</button>
            <button>Current Value</button>
          </div>
        </div>
        <div className="Distribution-GraphContainer">
          <div className="Graph">
            <PortfolioDistributionChart portfolioData={tempData} />
          </div>
          <div className="GraphLabel">
            <div className="GraphLabelItemContainer">
              <div className="GraphLabelItem">
                <span className="GraphLabelItem-Value">42%</span>
                <span className="GraphLabelItem-Symbol">BCH</span>
              </div>
              <div className="GraphLabelItem">
                <span className="GraphLabelItem-Value">42%</span>
                <span className="GraphLabelItem-Symbol">BCH</span>
              </div>
              <div className="GraphLabelItem">
                <span className="GraphLabelItem-Value">42%</span>
                <span className="GraphLabelItem-Symbol">BCH</span>
              </div>
              <div className="GraphLabelItem">
                <span className="GraphLabelItem-Value">42%</span>
                <span className="GraphLabelItem-Symbol">BCH</span>
              </div>
              <div className="GraphLabelItem">
                <span className="GraphLabelItem-Value">42%</span>
                <span className="GraphLabelItem-Symbol">BCH</span>
              </div>
              <div className="GraphLabelItem">
                <span className="GraphLabelItem-Value">42%</span>
                <span className="GraphLabelItem-Symbol">BCH</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default PortfolioDistribution;
