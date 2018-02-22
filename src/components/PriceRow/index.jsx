import React from 'react';
import PropTypes from 'prop-types';
import PriceBox from '../PriceBox';
import './index.css';


const PriceRow = props => (
  <div className="PriceRow">
    {
      props.boxContent.map(box => <PriceBox box={box} />)
    }
  </div>
);

PriceRow.propTypes = {
  boxContent: PropTypes.arrayOf(),
};

PriceRow.defaultProps = {
  boxContent: [
    {
      String: 'BTC / EUR',
      price: 111986,
      change: 14.90,
    },
    {
      String: 'BTC / USD',
      price: 119893,
      change: 3.90,
    },
    {
      String: 'ETH / EUR',
      price: 4622,
      change: 1.23,
    },
    {
      String: 'ETH / USD',
      price: 4525,
      change: -2.73,
    },
    {
      String: 'ETH / BTC',
      price: 0.0410417,
      change: 14.90,
    },
    {
      String: 'ETH / EUR',
      price: 4622,
      change: 1.23,
    },
    {
      String: 'ETH / USD',
      price: 4525,
      change: -2.73,
    },
    {
      String: 'ETH / BTC',
      price: 0.0410417,
      change: 14.90,
    },
  ],
};

export default PriceRow;
