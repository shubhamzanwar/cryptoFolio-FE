import React from 'react';
import PriceRow from '../PriceRow';
import Graph from '../Graph';
import Ticker from '../Ticker';
import './index.css';


const Body = () => (
  <div className="Body">
    <PriceRow />
    <div className="Body-graph-and-ticker-container">
      <Graph />
      <Ticker />
    </div>
  </div>
);


export default Body;
