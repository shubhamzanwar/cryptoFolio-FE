import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MyCoins from '../MyCoins';
import Investment from '../Investment';
import PortfolioDistribution from '../PortfolioDistribution';
import './index.css';

class Portfolio extends Component {
  componentWillMount() {
    if (window.localStorage.getItem('cryptologgedin') !== 'true') {
      this.props.history.push('/');
    }
  }
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

Portfolio.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default Portfolio;
