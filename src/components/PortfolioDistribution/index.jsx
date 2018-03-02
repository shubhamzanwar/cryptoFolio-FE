import React, { Component } from 'react';
import './index.css';

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
          <div className="Graph" />
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
