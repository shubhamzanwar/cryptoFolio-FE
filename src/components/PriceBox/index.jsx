import React from 'react';
import PropTypes from 'prop-types';
import './index.css';


const PriceBox = props => (
  <div className="PriceBox">
    <h3>{props.box.String}  <i className={props.box.change > 0 ? 'fa fa-long-arrow-up PriceBox-change-success' : 'fa fa-long-arrow-down PriceBox-change-danger'} /></h3>
    <p className="PriceBox-price">{props.box.price} <span className={props.box.change > 0 ? 'PriceBox-change PriceBox-change-success' : 'PriceBox-change PriceBox-change-danger'} >{props.box.change}</span></p>
  </div>
);

PriceBox.propTypes = {
  box: PropTypes.shape({
    String: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    change: PropTypes.number.isRequired,
  }),
};

PriceBox.defaultProps = {
  box: {},
};

export default PriceBox;
