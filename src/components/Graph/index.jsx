import React from 'react';
import PropTypes from 'prop-types';
import './index.css';


const Graph = props => (
  <div className="Graph">
    <div className="Graph-header">
      <h3>{props.coin} / USD</h3>

    </div>
    <div id="Graph-Live-Graph" className="Graph-liveGraph">
        Live graph from highcharts
    </div>
  </div>
);


Graph.propTypes = {
  coin: PropTypes.string,
};

Graph.defaultProps = {
  coin: 'BTC',
};

export default Graph;
