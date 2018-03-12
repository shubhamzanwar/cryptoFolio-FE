import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MyCoins from '../MyCoins';
import Investment from '../Investment';
import PortfolioDistribution from '../PortfolioDistribution';
import './index.css';

const groupByCoin = transactions => transactions.reduce((acc, curr) => {
  acc[curr.coinSymbol] = acc[curr.coinSymbol] || [];
  acc[curr.coinSymbol].push(curr);
  return acc;
}, {});

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userTransactions: {},
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
          userTransactions: groupByCoin(response),
        });
        console.log(groupByCoin(response));
      });
  }
  render() {
    return (
      <div className="Portfolio">
        <div className="Portfolio-Left-Container">
          <Investment />
          <MyCoins
            userTransactions={Object.values(this.state.userTransactions)}
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
