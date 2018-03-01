import React, { Component } from 'react';
import MyCoins from '../MyCoins';
import Investment from '../Investment';
import PortfolioDistribution from '../PortfolioDistribution';
import './index.css';

class Portfolio extends Component {
  render() {
    return (
      <div className="Portfolio">
        <div className="Portfolio-Graphs">
          <Investment />
          <PortfolioDistribution />
        </div>
        <div className="Portfolio-Table">
          <MyCoins />
        </div>
      </div>
    );
  }
}


export default Portfolio;
