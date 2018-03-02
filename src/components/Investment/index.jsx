import React, { Component } from 'react';
import './index.css';

class Investment extends Component {
  render() {
    return (
      <div className="Investment">
        <div className="Investment-Header">
          <p className="Investment-Header-Title">Ethereum</p>
        </div>
        <div className="Investment-Body">
          <div className="Investment-Values">
            <p className="Investment-Invested">Invested<br /><span>$ 27,000</span></p>
            <p className="Investment-Current">Current Value<br /><span>$ 27,000</span></p>
          </div>
          <div className="Investment-Graph1">
            <div className="Investment-bar">
              <div className="Investment-progress" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default Investment;
