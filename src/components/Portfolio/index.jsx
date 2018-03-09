import React, { Component } from 'react';
import MyCoins from '../MyCoins';
import Investment from '../Investment';
import PortfolioDistribution from '../PortfolioDistribution';
import './index.css';

class Portfolio extends Component {
  render() {
    return (
      <div className="Portfolio">
        <div className="Portfolio-Left-Container">
          <Investment />
          <MyCoins />
        </div>
        <div className="Portfolio-Right-Container">
          <PortfolioDistribution />
        </div>
      </div>
    );
  }
}


export default Portfolio;
