import React, { Component } from 'react';

import PortfolioDistributionChart from '../PortifolioDistributionChart';
import PortfolioDistributionLabel from '../PortofolioDistributionLabel';
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
  name: 'PSD',
  y: 39.38,
  color: '#50ef3b',
}, {
  name: 'WDS',
  y: 4.77,
}, {
  name: 'PQR',
  y: 0.91,
}, {
  name: 'ABC',
  y: 0.2,
  color: 'yellow',
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
              { tempData.map(coin => <PortfolioDistributionLabel value={coin.y} symbol={coin.name} color={coin.color} />)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default PortfolioDistribution;
