import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MyCoins from '../MyCoins';
import Investment from '../Investment';
import PortfolioDistribution from '../PortfolioDistribution';
import './index.css';

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userTransactions: [],
    };
  }
  componentWillMount() {
    const isLoggedinUser = window.localStorage.getItem('cryptologgedin');
    if (isLoggedinUser === 'false') {
      (this.props.history).push('/login');
    }
  }
  componentDidMount() {
    const authtoken = window.localStorage.getItem('cryptotoken');
    fetch('/portfolio', {
      method: 'GET',
      headers: { authtoken },
    })
      .then(response => response.json())
      .then((response) => {
        this.setState({
          userTransactions: response,
        });
      });
  }
  render() {
    return (
      <div className="Portfolio">
        <div className="Portfolio-Left-Container">
          <Investment />
          <MyCoins
            userTransactions={this.state.userTransactions}
          />
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
