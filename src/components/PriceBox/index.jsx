import React from 'react';
import PropTypes from 'prop-types';
import './index.css';


const PriceBox = props => (
  <div className="PriceBox">
    <h3>{props.box.Symbol} / USD <i className={props.box.Change > 0 ? 'fa fa-long-arrow-up PriceBox-change-success' : 'fa fa-long-arrow-down PriceBox-change-danger'} /></h3>
    <p className="PriceBox-price">{props.box.Price} <span className={props.box.Change > 0 ? 'PriceBox-change PriceBox-change-success' : 'PriceBox-change PriceBox-change-danger'} >{props.box.Change.toFixed(3)}%</span></p>
  </div>
);

PriceBox.propTypes = {
  box: PropTypes.shape({
    Symbol: PropTypes.string.isRequired,
    Price: PropTypes.number.isRequired,
    Change: PropTypes.number.isRequired,
  }),
};

PriceBox.defaultProps = {
  box: {},
};

export default PriceBox;
